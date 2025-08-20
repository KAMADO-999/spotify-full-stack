# 🎵 Spotify Clone - Summer Training Project

> 🎓 A comprehensive music streaming application developed during Summer Training Program, showcasing full-stack development skills with MERN stack, admin panel, and cloud integration.

Live link:-https://spotify-full-stack-admin-h0sy.onrender.com |
           https://spotify-full-stack-main-panel.onrender.com

---

## 📚 About This Project

This project was developed as part of our **Summer Training Program** to demonstrate practical implementation of modern web development technologies. It showcases the complete development lifecycle from planning to deployment, including:

- 🎯 **Full-Stack Development** - Frontend, Backend, and Database integration
- 🔧 **RESTful API Design** - Professional API architecture
- 🎨 **UI/UX Implementation** - Responsive and user-friendly interface
- ☁️ **Cloud Integration** - Media storage and deployment
- 🛡️ **Security Implementation** - Authentication and authorization
- 📊 **Admin Panel Development** - Content management system

---

## ✨ Features Implemented

### 🎧 User Features
- 🔐 **User Authentication** - Secure signup/login with JWT tokens
- 🎵 **Music Streaming** - High-quality audio playback with controls
- 📚 **Playlist Management** - Create, edit, and delete custom playlists
- 🔍 **Search Functionality** - Search songs, artists, and albums
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- ⏯️ **Player Controls** - Play, pause, skip, shuffle, and repeat
- 🔊 **Volume Control** - Adjustable audio levels with progress bar
- 💾 **Music Library** - Personal music collection management

### 🛠️ Admin Panel Features
- 📊 **Dashboard Overview** - Analytics and system statistics
- 🎤 **Music Upload** - Add new songs with metadata and artwork
- 👨‍🎤 **Artist Management** - Create and manage artist profiles
- 💿 **Album Organization** - Group songs into albums
- 👥 **User Management** - View and manage user accounts
- 📈 **Analytics** - Track popular content and user engagement
- 🎯 **Content Moderation** - Review and approve uploads

---

## 🚀 Technology Stack

<div align="center">

### 🎨 Frontend Technologies
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### ⚙️ Backend Technologies
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

### ☁️ Cloud & Tools
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

</div>

---

## 📁 Project Structure

```
🎵 spotify-clone/
├── 🎨 client/                    # React Frontend Application
│   ├── 📁 public/
│   │   ├── 🏠 index.html
│   │   └── 🎵 favicon.ico
│   ├── 📁 src/
│   │   ├── 🧩 components/        # Reusable UI components
│   │   │   ├── 🎵 Player/
│   │   │   ├── 🔍 SearchBar/
│   │   │   └── 📚 PlaylistCard/
│   │   ├── 📄 pages/             # Route pages
│   │   │   ├── 🏠 Home/
│   │   │   ├── 🔍 Search/
│   │   │   └── 📚 Library/
│   │   ├── 🔄 context/           # State management
│   │   ├── 🛠️ utils/             # Helper functions
│   │   ├── 🖼️ assets/            # Images & icons
│   │   └── ⚛️ App.js
│   └── 📦 package.json
├── 🛠️ admin/                     # Admin Panel Application
│   ├── 📁 src/
│   │   ├── 🧩 components/        # Admin components
│   │   ├── 📄 pages/             # Admin pages
│   │   │   ├── 📊 Dashboard/
│   │   │   ├── 🎵 AddSong/
│   │   │   └── 📈 Analytics/
│   │   └── ⚛️ App.js
│   └── 📦 package.json
├── 🖥️ server/                    # Node.js Backend
│   ├── 📊 models/                # MongoDB schemas
│   │   ├── 👤 User.js
│   │   ├── 🎵 Song.js
│   │   └── 📚 Playlist.js
│   ├── 🛣️ routes/                # API endpoints
│   ├── 🛡️ middleware/            # Custom middleware
│   ├── 🎮 controllers/           # Business logic
│   ├── ⚙️ config/                # Configuration
│   └── 🚀 server.js
├── 📖 README.md
└── 📦 package.json
```

---

## ⚡ Getting Started

### 📋 Prerequisites
- ![Node.js](https://img.shields.io/badge/Node.js-v14+-43853D?style=flat-square&logo=node.js&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-v6+-CB3837?style=flat-square&logo=npm&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-Local/Atlas-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
- ![Cloudinary](https://img.shields.io/badge/Cloudinary-Account-3448C5?style=flat-square&logo=cloudinary&logoColor=white)

### 🚀 Installation Steps

1. **📥 Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
   ```

2. **🖥️ Setup Backend Server**
   ```bash
   cd server
   npm install
   ```

3. **🎨 Setup Frontend Client**
   ```bash
   cd ../client
   npm install
   ```

4. **🛠️ Setup Admin Panel**
   ```bash
   cd ../admin
   npm install
   ```

5. **⚙️ Environment Configuration**
   
   Create `.env` file in the server directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # Authentication
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRE=7d
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # CORS
   CLIENT_URL=http://localhost:3000
   ADMIN_URL=http://localhost:3001
   ```

6. **🚀 Start Development Servers**
   
   **Backend Server** (Terminal 1):
   ```bash
   cd server
   npm run dev
   ```
   
   **Frontend Client** (Terminal 2):
   ```bash
   cd client
   npm start
   ```
   
   **Admin Panel** (Terminal 3):
   ```bash
   cd admin
   npm start
   ```

7. **🌐 Access Applications**
   - 🎵 **User App**: [http://localhost:3000](http://localhost:3000)
   - 🛠️ **Admin Panel**: [http://localhost:3001](http://localhost:3001)
   - 🖥️ **API Server**: [http://localhost:5000](http://localhost:5000)

---

## 🔌 API Documentation

### 🔐 Authentication Endpoints
```http
POST   /api/auth/register     # User registration
POST   /api/auth/login        # User login
POST   /api/auth/logout       # User logout
GET    /api/auth/me           # Get current user
PUT    /api/auth/update       # Update user profile
```

### 🎵 Music Endpoints
```http
GET    /api/songs             # Get all songs
GET    /api/songs/:id         # Get song by ID
POST   /api/songs             # Upload song (Admin)
PUT    /api/songs/:id         # Update song (Admin)
DELETE /api/songs/:id         # Delete song (Admin)
GET    /api/songs/search      # Search songs
```

### 💿 Album Endpoints
```http
GET    /api/albums            # Get all albums
GET    /api/albums/:id        # Get album by ID
POST   /api/albums            # Create album (Admin)
PUT    /api/albums/:id        # Update album (Admin)
DELETE /api/albums/:id        # Delete album (Admin)
```

### 📚 Playlist Endpoints
```http
GET    /api/playlists         # Get user playlists
POST   /api/playlists         # Create playlist
PUT    /api/playlists/:id     # Update playlist
DELETE /api/playlists/:id     # Delete playlist
POST   /api/playlists/:id/songs  # Add song to playlist
```

### 👥 Admin Endpoints
```http
GET    /api/admin/users       # Get all users
GET    /api/admin/stats       # Get platform statistics
PUT    /api/admin/users/:id   # Update user status
DELETE /api/admin/users/:id   # Delete user
```

---

---

## 🌐 Deployment Guide

### 🚀 Backend Deployment (Railway/Render)
1. Create account on Railway/Render
2. Connect your GitHub repository
3. Set environment variables
4. Deploy from `server` directory

### 🎨 Frontend Deployment (Vercel/Netlify)
```bash
# Build the client
cd client
npm run build

# Deploy build folder to Vercel/Netlify
```

### 🛠️ Admin Panel Deployment
```bash
# Build the admin panel
cd admin
npm run build

# Deploy to separate subdomain
```

---

## 🎯 Learning Outcomes

Through this summer training project, we gained hands-on experience in:

### 💻 Technical Skills
- ✅ **Full-Stack Development** - End-to-end web application development
- ✅ **RESTful API Design** - Creating scalable backend services
- ✅ **Database Management** - MongoDB schema design and optimization
- ✅ **Authentication Systems** - JWT implementation and security
- ✅ **File Upload & Storage** - Cloudinary integration for media files
- ✅ **State Management** - Redux/Context API for frontend state
- ✅ **Responsive Design** - Mobile-first UI/UX development

### 🔧 Professional Skills
- ✅ **Version Control** - Git workflows and collaboration
- ✅ **Project Management** - Planning and executing development phases
- ✅ **Problem Solving** - Debugging and troubleshooting
- ✅ **Documentation** - Writing clear technical documentation
- ✅ **Testing** - Manual testing and error handling
- ✅ **Deployment** - Cloud hosting and production deployment

---

## 🤝 Team & Contributions

### 👨‍💻 Development Team
- **[Aditya Srivastava]** - 2nd yr student
-  **[Gracy Srivastava]** - 2nd yr student
 - **[Adarsh Dwiedi]** - 2nd yr student
  

### 🎓 Training Program
- **Institution**: [United College of Engineering and research prayagraj]
- **Duration**: [21days]
- **Mentor**: [Mr Param Goel]
- **Technologies Learned**: MERN Stack, Cloud Services, Deployment

---

## 🔮 Future Enhancements

### 🚀 Planned Features
- [ ] 🎵 **Real-time Chat** - Users can chat while listening
- [ ] 📱 **Mobile App** - React Native mobile application
- [ ] 🤖 **AI Recommendations** - ML-based music suggestions
- [ ] 🎪 **Social Features** - Follow friends, share playlists
- [ ] 💳 **Payment Integration** - Premium subscription features
- [ ] 🎤 **Live Streaming** - Artist live performance feature
- [ ] 📊 **Advanced Analytics** - Detailed listening statistics
- [ ] 🌍 **Multi-language Support** - Internationalization

---

## 📚 Resources & References

### 📖 Documentation
- [React.js Documentation](https://reactjs.org/docs)
- [Node.js Documentation](https://nodejs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

### 🎓 Learning Resources
- [MERN Stack Tutorial](https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ)
- [JWT Authentication Guide](https://jwt.io/introduction)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/getting-started)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. 🍴 **Fork the repository**
2. 🔧 **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. ✅ **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push to the branch** (`git push origin feature/AmazingFeature`)
5. 🔀 **Open a Pull Request**

### 📋 Contribution Guidelines
- Follow existing code style and conventions
- Write clear commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

### 👏 Special Thanks
- 🎵 **Spotify** - For design inspiration and user experience reference
- 🏫 **[Training Institute Name]** - For providing learning opportunity
- 👨‍🏫 **Training Mentors** - For guidance and support
- 🌟 **Open Source Community** - For amazing libraries and tools
- 👥 **Fellow Trainees** - For collaboration and peer learning

### 🛠️ Technology Credits
- **MongoDB** - For robust database solution
- **Cloudinary** - For seamless media storage
- **Render** - For easy deployment
- **GitHub** - For version control and collaboration

---

## 📞 Support & Contact

### 📧 Get in Touch
- **Email**:(mailto:kamado.official.99@gmail.com)
- **LinkedIn**: [ADITYA SRIVASTAVA](https://linkedin.com/in/yourprofile)
- **GitHub**: [KAMADO-999](https://github.com/KAMADO-999)

### 🆘 Support
If you encounter any issues or have questions:

1. 📋 Check existing [Issues](https://github.com/KAMADO-999/spotify-clone/issues)
2. 🆕 Create a new issue with detailed description
3. 📧 Email for direct support
4. ⭐ Star the repo if you found it helpful!

---

<div align="center">

### 🌟 Show Your Support

If this project helped you learn something new, please consider giving it a ⭐️!

**Built with ❤️ during Summer Training Program**

---

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)
![Built by Students](https://img.shields.io/badge/Built%20by-Students-blue.svg)
![Summer Training](https://img.shields.io/badge/Summer-Training-green.svg)

</div>

---

> **📝 Note**: This project was developed as part of a summer training program to demonstrate full-stack web development skills. It's created for educational purposes and is not affiliated with Spotify AB.
