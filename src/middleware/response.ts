export const responseFormat = (error: Error | null, message: String | null, data={}, statusCode: Number) => {
    return {
        data: {
            message,
            data: data
        },
        statusCode,
        error
    }
    
}