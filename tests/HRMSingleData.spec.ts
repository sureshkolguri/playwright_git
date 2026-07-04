import { test } from "@playwright/test";
import { AdminLogin } from "../pages/AdminLogin";
import { AddEmp } from "../pages/AddEmp";
import * as dotenv from 'dotenv'
dotenv.config()
test.describe('HRM employee management',()=>{
    let login:AdminLogin
    let emp:AddEmp
    test.beforeEach(async({page})=>{
        login =new AdminLogin(page)
        emp= new AddEmp(page)
        await login.LaunchUrl(process.env.Base_URL!)
        await login.HRMLogin(process.env.BASE_USER!,process.env.BASE_PASS!)

    })
    test('should add emp successfully',async()=>{
        await emp.Add_Emp('suresh','sagar','kolguri')

    })
    test.afterEach(async()=>{
        await login.HrMLogout()
        
    })
})
