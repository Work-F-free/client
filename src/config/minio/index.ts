import AWS from "aws-sdk";

const minioClient = new AWS.S3({
  endpoint: `${import.meta.env.VITE_END_POINT_MINIO}:${
    import.meta.env.VITE_PORT_MINIO
  }`,
  accessKeyId: import.meta.env.VITE_ACCESS_KEY_MINIO,
  secretAccessKey: import.meta.env.VITE_SECRET_KEY_MINIO,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});

export const s3minio = {
  minioClient: minioClient,
  bucketName: "test",
  generate_name_plane: (
    id: string,
    name_coworking: string,
    file_name: string,
  ) => {
    return `${id}-${name_coworking}-plane.${file_name}`;
  },
  generate_name_photo: (
    id: string,
    name_coworking: string,
    file_name: string,
  ) => {
    return `${id}-${name_coworking}-photo.${file_name}`;
  },
};
