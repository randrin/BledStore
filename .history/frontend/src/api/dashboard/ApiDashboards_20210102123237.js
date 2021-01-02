


export const getDashboardInfos = () => {
    try {
        
    } catch (error) {
        return { error: error.response.data.message || error.message };
    }
}