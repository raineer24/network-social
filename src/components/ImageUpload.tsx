"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
    onChange: (url: string) => void;
    value: string;
    endpoint: "postImage"
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
    if (value) {
        return (
            <div className="relative">
                <img src={value} alt="Upload" className="rounded-md size-40 object-cover"/>
                <button
                    onClick={() => onChange("")}>
                    <XIcon className="h-4 w-4 text-white" />
                </button>
            </div>
        );
    }
    return (
        <UploadDropzone 
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
    )
}
export default ImageUpload;
