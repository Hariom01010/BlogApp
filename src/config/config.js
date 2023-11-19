const projectUrl = String(import.meta.env.VITE_APPWRITE_PROJECT_URL)
const projectId = String(import.meta.env.VITE_APPWRITE_PROJECT_ID)
const databaseId = String(import.meta.env.VITE_APPWRITE_DATABASE_ID)
const collectionId = String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
const bucketId = String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

export {projectUrl, projectId, databaseId, collectionId, bucketId}