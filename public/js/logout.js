const logout = async () => {
    //logoutPath will be replaced once handlebars have been complete
    const response = await fetch('logoutPath', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  //'logoutBtn' will be replaced once handlebars have been complete
  document.querySelector('logoutBtn').addEventListener('click', logout);