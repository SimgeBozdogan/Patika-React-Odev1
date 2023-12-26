import axios from 'axios';

export default async function getData(userId) {
  try {
    // Kullanıcı bilgilerini çekiyorum
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;

    // Kullanıcının post'larını çekiyorum
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = postsResponse.data;

    // Kullanıcı bilgileri ve post'ları birleştirip geri döndürüyorum
    return {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      website: userData.website,
      company: userData.company,
      posts: userPosts,
    };
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}