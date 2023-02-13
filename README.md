# Blood Management System

Search by blood group and view in which hospitals / blood banks, the blood group is available.

## Description

### Features

- Add record (blood group and quantity) that is available in a blood bank.
- Update record (quantity) of blood available in a blood bank.
- Delete record (blood group and blood bank) from inventory.
- Search by blood group to view which blood banks have that blood group available.

### Tech Stack:

- MySQL
- React.js
- Express.js
- Bootstrap, React Bootstrap

### To run the application locally

- Fork and clone this repository to your machine:
  git clone https://github.com/SandeshGC/Criminal-Record-Management-System.git

- Start MySQL server.

- Create databases and tables as specified in the 'Database' section.

- Install required npm packages in 'server' directory and start server:
  `cd server` locate into server directory
  `npm install` install packages
  `npm run start` start server

- Install required npm packages in 'client' directory:
  `cd client` locate into client directory
  `npm install` install packages
  `npm run dev` deploy the frontend locally

### Database

- Table: 'inventory'
- Table: 'blood_bank'
- Table: 'blood'

### Continued Development

- Add more styles, make UI better
- Restrict entry of duplicate values to inventory
- Improve error handling

### Author

[Samir Gurung](https://www.facebook.com/gurung.sameer.12/)

### Acknowledgement

[Sandesh GC](https://www.github.com/SandeshGC)
