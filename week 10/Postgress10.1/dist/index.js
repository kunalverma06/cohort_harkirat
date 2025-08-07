"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const postgress = require("pg");
function Database(Values) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new postgress.Client({
            host: "localhost",
            port: 5432,
            database: "postgres",
            user: "postgres",
            password: "12345678"
        });
        function CreateTable(Values) {
            return __awaiter(this, void 0, void 0, function* () {
                yield client.connect();
                const { functionName, tableName } = Values;
                yield client.query(`CREATE TABLE  "${tableName}" (id SERIAL PRIMARY KEY, name VARCHAR(50), email VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL);`);
                console.log("Table created");
            });
        }
        ;
        CreateTable(Values);
    });
}
Database({ functionName: "CreateTable", tableName: "DEMO" });
