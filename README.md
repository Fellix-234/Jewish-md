# JEWISH MD ⚡
### Peaky Blinders Features Edition

A WhatsApp Multi-Device bot built with Baileys.
Clean structure, fast commands, themed responses, and session-site support.

## Features
- 150+ commands
- 27 plugins
- Group/admin tools
- Economy + games
- Media/download tools
- AI/anime/music/social commands

## Deploy (Render)
Use **2 separate services**:

### 1) Main Bot (Background Worker)
- Repository: `Fellix-234/Jewish-md`
- Root Directory: *(leave empty)*
- Build Command: `npm install`
- Start Command: `node index.js`

### 2) Session Site (Web Service)
- Repository: `Fellix-234/Jewish-md`
- Root Directory: `session-site`
- Build Command: `npm install`
- Start Command: `node app.js`

## Get Session Code
[![Get Session Code](https://img.shields.io/badge/GET_SESSION_CODE-gold?style=for-the-badge&labelColor=black)](https://jewish-md-session-site.onrender.com)

## Local Setup
```bash
git clone https://github.com/Fellix-234/Jewish-md.git
cd Jewish-md
npm install
node index.js
```

## Basic Config
Edit `config.js`:
- `ownerNumbers`
- `prefix`
- `workType`
- `sessionName`

## Core Commands
- `.menu` - Main menu
- `.alive` - Bot status
- `.ping` - Speed test
- `.groupinfo` - Group details
- `.warn @user` - Moderation
- `.rank` - User rank
- `.sticker` - Sticker tools
- `.ytmp3` - Download tools

## Project Structure
- `index.js` - Bot entry
- `handler.js` - Command router
- `plugins/` - All command modules
- `session-site/` - Pairing code web app

## Repository
https://github.com/Fellix-234/Jewish-md

---
Made for fast deployment and clean maintenance.
