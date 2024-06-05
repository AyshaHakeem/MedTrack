const isLoggedIn = () => {
    // const token = localStorage.getItem('medtrack_token');
    const token = ''
    return !!token; // Return true if token exists, false otherwise
};

export default isLoggedIn