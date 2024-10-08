import mongoose from "mongoose";

import utils from "../utils";

import Owner from "../models/ownerModel";
import Company from "../models/companyModel";
import Worker from "../models/workerModel";
import Admin from "../models/adminModel";
import RequestM from "../models/requestModel";
import { unescape } from "querystring";
import Maintenance from "../models/maintenanceModel";

const populateDB = async () => {
    try {
        const dbName = mongoose.connection.db.databaseName;

        // Check if we need to drop the database
        const adminDB = mongoose.connection.db.admin();
        const databases = await adminDB.listDatabases();

        if (databases.databases.some((db) => db.name === dbName)) {
            await mongoose.connection.db.dropDatabase();
        }

        // Initialize admins
        const initialAdmins = [
            {
                username: "main_boss_man",
                password: utils.hashPassword("theMainPassword"),
            },
            {
                username: "veliki_poglavar_baste",
                password: utils.hashPassword("admin123"),
            },
            {
                username: "admin",
                password: utils.hashPassword("admin"),
            },
        ];

        await Admin.insertMany(initialAdmins);

        // Initialize owners
        const intialOwners = [
            {
                username: "markomarko",
                password: utils.hashPassword("password123"),
                name: "Marko",
                surname: "Marković",
                gender: "M",
                address: "Neka Tamo 212",
                contactNumber: "+381 62 029 1252",
                email: "markomarkovic123@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                cardNumber: "5274556649237699",
                __status__: "approved",
            },
            {
                username: "petarcar",
                password: utils.hashPassword("mojasifra21"),
                name: "Petar",
                surname: "Kraljević",
                gender: "M",
                address: "Neka Tamo 214",
                contactNumber: "+381 66 021 1111",
                email: "petarkralj12@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                cardNumber: "5299598123850531",
                __status__: "approved",
            },
            {
                username: "masanL",
                password: utils.hashPassword("dosijeznaskoga"),
                name: "Mašan",
                surname: "Lekić",
                gender: "M",
                address: "Lekiceva 12",
                contactNumber: "+381 65 251 2352",
                email: "mlekic@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                cardNumber: "5301099244177843",
                __status__: "awaiting",
            },
            {
                username: "cuvarbaster",
                password: utils.hashPassword("cuvarbaste21"),
                name: "Uroš",
                surname: "Uskoković",
                gender: "M",
                address: "Terazijska 12",
                contactNumber: "+381 61 221 9211",
                email: "urosuskokovic24@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                cardNumber: "5297937189565512",
                __status__: "rejected",
            },
            {
                username: "majaparezanin2",
                password: utils.hashPassword("tajnaTajna12"),
                name: "Maja",
                surname: "Parežanin",
                gender: "Z",
                address: "Majska 26c",
                contactNumber: "+381 60 231 1291",
                email: "majaparezanin212@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                cardNumber: "5294459278224888",
                __status__: "redacted",
            },
        ];

        const ownerInsertResult = await Owner.insertMany(intialOwners);

        // Initialize companies
        const initialCompanies = [
            {
                name: "Kapljica DOO",
                address: "Popova bara nova 3. 1А",
                services: [
                    {
                        serviceName: "Čišcenje bazena",
                        servicePrice: 6000,
                    },
                    {
                        serviceName: "Iznošenje smeća",
                        servicePrice: 400,
                    },
                    {
                        serviceName: "Skraćivanje granja",
                        servicePrice: 1000,
                    },
                    {
                        serviceName: "Zamena filtera bazena",
                        servicePrice: 1200,
                    },
                ],
                contactNumber: "+381 121 921 2151",
                mapCoordinates: {
                    x: 44.868989829535586,
                    y: 20.473653283281465,
                },
                vacationPeriod: {
                    start: utils.getSerbianTime(2024, 7, 28, 8, 0, 0),
                    end: utils.getSerbianTime(2024, 8, 10, 12, 0, 0),
                },
            },
            {
                name: "Servis za održavanje bašta - Zelenko",
                address: "Temerinski put 26А",
                services: [
                    {
                        serviceName: "Šišanje trave",
                        servicePrice: 5000,
                    },
                    {
                        serviceName: "Čišcenje baštenske garniture",
                        servicePrice: 1200,
                    },
                    {
                        serviceName: "Skraćivanje granja",
                        servicePrice: 2000,
                    },
                    {
                        serviceName: "Iznošenje otpada",
                        servicePrice: 3500,
                    },
                ],
                contactNumber: "+381 231 242 2135",
                vacationPeriod: {
                    start: utils.getSerbianTime(2024, 8, 1, 8, 0, 0),
                    end: utils.getSerbianTime(2024, 8, 25, 8, 0, 0),
                },
            },
            {
                name: "Marko i sinovi - servis bazena",
                address: "Stopićeva 7",
                services: [
                    {
                        serviceName: "Zamena filtera bazena",
                        servicePrice: 10000,
                    },
                    {
                        serviceName: "Čišcenje bazena",
                        servicePrice: 6000,
                    },
                ],
                contactNumber: "+381 300 400 5050",
                vacationPeriod: {
                    start: utils.getSerbianTime(2024, 8, 1, 8, 0, 0),
                    end: utils.getSerbianTime(2024, 8, 25, 8, 0, 0),
                },
            },
        ];

        const companyInsertResult = await Company.insertMany(initialCompanies);

        // Initialize workers
        const initialWorkers = [
            {
                username: "radnikZore1",
                password: utils.hashPassword("doZoreRadim123"),
                name: "Predrag",
                surname: "Zdravković",
                gender: "M",
                address: "Brdska 21A",
                contactNumber: "+381 63 214 212 9271",
                email: "pedjatheboy12@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                company: companyInsertResult[0].id,
                __status__: "active",
            },
            {
                username: "radnikZore2",
                password: utils.hashPassword("doZoreRadim123433"),
                name: "Marko",
                surname: "Ljuga",
                gender: "M",
                address: "Padinsk 13",
                contactNumber: "+381 62 114 212 9275",
                email: "ljigavac12@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                company: companyInsertResult[0].id,
                __status__: "active",
            },
            {
                username: "radnikZore3",
                password: utils.hashPassword("212doZoreRadim123433"),
                name: "Julija",
                surname: "Maser",
                gender: "Z",
                address: "Nizbrdska 12",
                contactNumber: "+381 66 122 222 3333",
                email: "julijanizbrda1@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                company: companyInsertResult[0].id,
                __status__: "active",
            },
            {
                username: "bastovan_12",
                password: utils.hashPassword("kosimtrnje12"),
                name: "Slavica",
                surname: "Marković",
                gender: "Z",
                address: "Ulica ruža 122",
                contactNumber: "+381 61 302 251 5214",
                email: "smarkovic25@yahoo.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                company: companyInsertResult[1].id,
                __status__: "active",
            },
            {
                username: "kosac_zbunja",
                password: utils.hashPassword("poslemenetravaneraste"),
                name: "Saša",
                surname: "Popović",
                gender: "M",
                address: "Ulica veselja 21",
                contactNumber: "+381 61 351 321 3212",
                email: "spopovic12@yahoo.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                company: companyInsertResult[1].id,
                __status__: "active",
            },
            {
                username: "d_popovic_12",
                password: utils.hashPassword("necUDatikazemCelavi"),
                name: "Dragan",
                surname: "Popović",
                gender: "M",
                address: "Ulica veselja 25",
                contactNumber: "+381 61 350 341 3201",
                email: "draganp212@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                company: companyInsertResult[2].id,
                __status__: "active",
            },
            {
                username: "m_simic",
                password: utils.hashPassword("mojaSifraNemaDruge"),
                name: "Milica",
                surname: "Simić",
                gender: "Z",
                address: "Ugostiteljsko naselje 21A",
                contactNumber: "+381 64 021 212 3524",
                email: "msicim123@gmail.com",
                photoBitecode: utils.encodeImageToBase64(
                    "resources/images/default-avatar.png"
                ),
                company: companyInsertResult[2].id,
                __status__: "active",
            },
        ];

        const workerInsertResult = await Worker.insertMany(initialWorkers);

        const initialRequests = [
            {
                ownerId: ownerInsertResult[0].id,
                companyId: companyInsertResult[0].id,
                workerId: undefined,
                gardenType: "P",
                gardenArea: 3,
                greenArea: 1,
                poolArea: 1,
                fountainArea: undefined,
                furnitureArea: 1,
                furnitureNumber: undefined,
                selectedServices: companyInsertResult[0].services.slice(0, 2),
                createdAt: new Date(),
                requestCompletedAt: utils.addDaysToDate(new Date(), 10),
                lastMaintenanceAt: undefined,
                __status__: "waiting",
            },
            {
                ownerId: ownerInsertResult[0].id,
                companyId: companyInsertResult[0].id,
                workerId: undefined,
                gardenType: "R",
                gardenArea: 3,
                greenArea: 1,
                poolArea: 1,
                fountainArea: undefined,
                furnitureArea: 1,
                furnitureNumber: undefined,
                selectedServices: companyInsertResult[0].services.slice(0, 2),
                createdAt: utils.substractDaysToDate(new Date(), 2),
                requestCompletedAt: utils.addDaysToDate(new Date(), 2),
                lastMaintenanceAt: undefined,
                __status__: "waiting",
            },
            {
                ownerId: ownerInsertResult[0].id,
                companyId: companyInsertResult[1].id,
                workerId: undefined,
                gardenType: "R",
                gardenArea: 4,
                greenArea: 2,
                poolArea: undefined,
                fountainArea: 2,
                furnitureArea: undefined,
                furnitureNumber: 10,
                selectedServices: companyInsertResult[1].services.slice(0, 1),
                createdAt: new Date(),
                requestCompletedAt: utils.addDaysToDate(new Date(), 30),
                lastMaintenanceAt: undefined,
                __status__: "rejected",
            },
            {
                ownerId: ownerInsertResult[0].id,
                companyId: companyInsertResult[0].id,
                workerId: workerInsertResult[0].id,
                gardenType: "P",
                gardenArea: 4,
                greenArea: 2,
                poolArea: 1,
                fountainArea: undefined,
                furnitureArea: 1,
                furnitureNumber: undefined,
                selectedServices: companyInsertResult[0].services.slice(0, 2),
                createdAt: new Date(),
                requestCompletedAt: utils.addDaysToDate(new Date(), 30),
                lastMaintenanceAt: utils.addDaysToDate(new Date(), 30),
                __status__: "approved",
            },
            {
                ownerId: ownerInsertResult[2].id,
                companyId: companyInsertResult[2].id,
                workerId: workerInsertResult[1].id,
                gardenType: "R",
                gardenArea: 4,
                greenArea: 2,
                poolArea: undefined,
                fountainArea: 2,
                furnitureArea: undefined,
                furnitureNumber: 12,
                selectedServices: companyInsertResult[2].services.slice(0, 2),
                createdAt: utils.substractDaysToDate(new Date(), 10),
                requestCompletedAt: utils.substractDaysToDate(new Date(), 5),
                lastMaintenanceAt: utils.substractDaysToDate(new Date(), 5),
                __status__: "approved",
            },
            {
                ownerId: ownerInsertResult[0].id,
                companyId: companyInsertResult[0].id,
                workerId: workerInsertResult[1].id,
                gardenType: "P",
                gardenArea: 4,
                greenArea: 2,
                poolArea: 1,
                fountainArea: undefined,
                furnitureArea: 1,
                furnitureNumber: undefined,
                selectedServices: companyInsertResult[1].services.slice(0, 2),
                createdAt: utils.substractDaysToDate(new Date(), 25),
                requestCompletedAt: utils.substractDaysToDate(new Date(), 20),
                lastMaintenanceAt: utils.substractDaysToDate(new Date(), 10),
                __status__: "approved",
            },
            {
                ownerId: ownerInsertResult[0].id,
                companyId: companyInsertResult[0].id,
                workerId: workerInsertResult[1].id,
                gardenType: "R",
                gardenArea: 6,
                greenArea: 3,
                poolArea: undefined,
                fountainArea: 3,
                furnitureArea: undefined,
                furnitureNumber: 20,
                selectedServices: companyInsertResult[0].services.slice(0, 2),
                createdAt: utils.substractDaysToDate(new Date(), 220),
                requestCompletedAt: utils.substractDaysToDate(new Date(), 200),
                lastMaintenanceAt: utils.substractDaysToDate(new Date(), 200),
                __status__: "approved",
            },
        ];

        const requestsInsertResult = await RequestM.insertMany(initialRequests);

        const initialMaintenances = [
            {
                requestId: requestsInsertResult[4].id,
                workerId: undefined,
                companyId: companyInsertResult[0].id,
                completedAt: undefined,
                __status__: "rejected",
            },
            {
                requestId: requestsInsertResult[4].id,
                workerId: workerInsertResult[1].id,
                companyId: companyInsertResult[0].id,
                completedAt: utils.addDaysToDate(new Date(), 10),
                __status__: "approved",
            },
            {
                requestId: requestsInsertResult[4].id,
                workerId: undefined,
                companyId: companyInsertResult[0].id,
                completedAt: undefined,
                __status__: "waiting",
            },
        ];

        const maintenancesInsertionResult = await Maintenance.insertMany(
            initialMaintenances
        );

        console.log("Database initialized");
    } catch (err) {
        console.error("Error populating the database:", err);
    }
};

export default populateDB;
