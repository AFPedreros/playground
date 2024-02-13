"use client"

import { ourFileRouter } from "@/app/api/uploadthing/core"
import { UploadDropzone } from "@/lib/uploadthing"
import { toast } from "sonner"

type FileUploadProps = {
    onChange: (url?:string)=>void
    endpoint: keyof typeof ourFileRouter
}

export function FileUpload({onChange, endpoint}:FileUploadProps) {
    return <UploadDropzone endpoint={endpoint} onClientUploadComplete={(response)=>{
        onChange(response?.[0]?.url)
    }}
    onUploadError={(error:Error)=>{
        console.error("Error", error)
        toast.error("Algo salió mal al subir la imagen. Intenta de nuevo.")
    }}
    />
}
