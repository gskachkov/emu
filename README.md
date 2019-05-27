# EMU APP [![Build Status](https://cloud.drone.io/api/badges/juaning/emu/status.svg)](https://cloud.drone.io/juaning/emu)

Emu is an app to manage payroll.

I have a docker compose file that creates 3 containers:

* API: Node 9
* DB: MongoDB
* Front End: ReactJA

To start the app, run this command on the root directory:
```
docker-compose up
```

Then head to http://localhost:8080.

![employees list](https://github.com/juaning/emu/blob/master/resources/img/employees_list.jpeg?raw=true)
