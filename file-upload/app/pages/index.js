import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Home() {
  const { register, handleSubmit, setValue } = useForm();
  const [progress, setProgress] = useState(0);

  const onDrop = (acceptedFiles) => {
    setValue("file", acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const onSubmit = async (data) => {
    const file = data.file;

    // ✅ Validation
    if (!file) {
      alert("No file selected");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("File size must be less than 2MB");
      return;
    }

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Only JPG/PNG allowed");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percent);
        },
      });

      alert("Upload successful!");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Upload</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Drag & Drop */}
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed gray",
            padding: "20px",
            marginBottom: "10px",
          }}
        >
          <input {...getInputProps()} />
          <p>Drag & drop file here, or click to select</p>
        </div>

        <input type="file" {...register("file")} />

        <button type="submit">Upload</button>
      </form>

      {/* Progress Bar */}
      <div style={{ marginTop: "10px" }}>
        <p>Progress: {progress}%</p>
        <div
          style={{
            width: "100%",
            background: "#eee",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "10px",
              background: "green",
            }}
          />
        </div>
      </div>
    </div>
  );
}