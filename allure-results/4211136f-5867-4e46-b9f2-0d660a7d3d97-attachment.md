# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HRMSingleData.spec.ts >> HRM employee management >> should add emp successfully
- Location: tests\HRMSingleData.spec.ts:16:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.inputValue: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input#personal_txtEmployeeId')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - textbox [ref=e5]
  - generic [ref=e6]:
    - img [ref=e8]
    - generic [ref=e9]:
      - img [ref=e11]
      - generic [ref=e39]:
        - generic [ref=e40]: LOGIN Panel
        - generic [ref=e41]:
          - textbox [ref=e42]
          - text: Username
        - generic [ref=e43]:
          - textbox [ref=e44]
          - text: Password
        - generic [ref=e46]:
          - button "LOGIN" [ref=e47] [cursor=pointer]
          - link "Forgot your password?" [ref=e49] [cursor=pointer]:
            - /url: /symfony/web/index.php/auth/requestPasswordResetCode
  - generic [ref=e52]:
    - text: "Alternative Login :"
    - combobox [ref=e53]:
      - option "-- Select --" [selected]
    - button "Login" [disabled] [ref=e54]
  - generic [ref=e55]:
    - generic [ref=e56]:
      - text: OrangeHRM 4.10.1
      - text: © 2005 - 2026
      - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
        - /url: http://www.orangehrm.com
      - text: . All rights reserved.
    - generic [ref=e58]:
      - link "LinkedIn OrangeHRM group" [ref=e59] [cursor=pointer]:
        - /url: http://www.linkedin.com/groups?home=&gid=891077
        - img "LinkedIn OrangeHRM group" [ref=e60]
      - link "OrangeHRM on Facebook" [ref=e61] [cursor=pointer]:
        - /url: http://www.facebook.com/OrangeHRM
        - img "OrangeHRM on Facebook" [ref=e62]
      - link "OrangeHRM on twitter" [ref=e63] [cursor=pointer]:
        - /url: http://twitter.com/orangehrm
        - img "OrangeHRM on twitter" [ref=e64]
      - link "OrangeHRM on youtube" [ref=e65] [cursor=pointer]:
        - /url: http://www.youtube.com/orangehrm
        - img "OrangeHRM on youtube" [ref=e66]
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AddEmp{
  4  |    readonly page:Page
  5  |    readonly clickPim : Locator
  6  |    readonly clickAdd :Locator
  7  |    readonly firstName : Locator
  8  |    readonly Middlename :Locator
  9  |    readonly Lastname: Locator
  10 |    readonly employeeId :Locator
  11 |    readonly clickSave: Locator
  12 |    readonly displayPersonalId :Locator
  13 |    constructor(page:Page){
  14 |     this.page= page;
  15 |     this.clickPim = page.getByRole('link', { name: 'PIM' })
  16 |     this.clickAdd = page.getByRole('button', { name: 'Add' })
  17 |     this.firstName = page.locator('input#firstName')
  18 |     this.Middlename = page.locator('input#middleName')
  19 |     this.Lastname = page.locator('input#lastName')
  20 |     this.employeeId = page.locator('input#employeeId')
  21 |     this.clickSave = page.getByRole('button', { name: 'Save' })
  22 |     this.displayPersonalId = page.locator('input#personal_txtEmployeeId')
  23 |     
  24 | 
  25 |    }
  26 |    //method for add emp
  27 |    async Add_Emp(fname:string,mName:string,lname:string)
  28 |    {
  29 |     this.clickPim.click()
  30 |     await this.page.waitForTimeout(2000)
  31 |     this.clickAdd.click()
  32 |     await this.firstName.waitFor({ state: 'visible' });
  33 |     await this.firstName.fill(String(fname || ""));
  34 |     await this.Middlename.waitFor({ state: 'visible' });
  35 |     await this.Middlename.fill(String(mName || "")); 
  36 |     await this.Lastname.waitFor({ state: 'visible' });
  37 |     await this.Lastname.fill(String(lname || ""));
  38 | 
  39 |     //capture Employee id
  40 |     const ExpectedId = await this.employeeId.inputValue()
  41 |     await this.clickSave.click()
  42 |     await this.page.waitForTimeout(2000)
> 43 |     const Actualid = await this.displayPersonalId.inputValue()
     |                                                   ^ Error: locator.inputValue: Test timeout of 30000ms exceeded.
  44 |     expect(Actualid).toBe(ExpectedId);
  45 |     console.log(ExpectedId+"     "+Actualid)
  46 |     return Actualid;
  47 | 
  48 | 
  49 |    }
  50 | 
  51 | }
  52 | 
```