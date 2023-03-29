export default interface LocalFile{
    id: number,
    "fileName": string,
    "url": string,
    "updatedAt": string,
    "createdAt": string,
    "createdBy": {
        "id": number,
        "userName": string,
        "email": string
    }
}