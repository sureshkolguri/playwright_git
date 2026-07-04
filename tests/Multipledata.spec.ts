import{test} from '@playwright/test'
import { AdminLogin } from '../pages/AdminLogin'
import { AddEmp } from '../pages/AddEmp'
import * as dotenv from 'dotenv'
import employeedata from '../TestData/multipledata.json'
dotenv.config()
test.describe('multiple data ',()=>{
    let login:AdminLogin
    let emp:AddEmp
    test.beforeEach(async({page})=>{
         login=new AdminLogin(page)
         emp=new AddEmp(page)
         await login.LaunchUrl(process.env.BASE_URL!)

await login.HRMLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
    })

    for (const data of employeedata) {
        test(`Add Employee ${data.firstName} ${data.middleName} `,async({page})=>{
            //call add emp method
            await emp.Add_Emp(data.firstName,data.middleName,data.lastName)
        })
    }

})
