# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Multipledata.spec.ts >> multiple data  >> Add Employee Charlie Akhilesh1 
- Location: tests\Multipledata.spec.ts:19:13

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
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "OrangeHRM" [ref=e4] [cursor=pointer]:
        - /url: http://www.orangehrm.com/
        - img "OrangeHRM" [ref=e5]
      - link "Welcome Suresh" [ref=e6] [cursor=pointer]:
        - /url: "#"
      - img [ref=e9]
      - link [ref=e11] [cursor=pointer]:
        - /url: /symfony/web/index.php/help/help?label=pim_addEmployee
        - img [ref=e13]
      - button "Subscribe" [ref=e16]
      - button "Marketplace" [ref=e18]
      - generic:
        - generic:
          - generic "1"
    - list [ref=e20]:
      - listitem [ref=e21]:
        - link "Admin" [ref=e22] [cursor=pointer]:
          - /url: /symfony/web/index.php/admin/viewAdminModule
          - generic [ref=e23]: Admin
        - list [ref=e24]:
          - listitem [ref=e25]:
            - link "User Management" [ref=e26] [cursor=pointer]:
              - /url: "#"
            - list [ref=e27]:
              - listitem [ref=e28]:
                - link "Users" [ref=e29] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewSystemUsers
          - listitem [ref=e30]:
            - link "Job" [ref=e31] [cursor=pointer]:
              - /url: "#"
            - list [ref=e32]:
              - listitem [ref=e33]:
                - link "Job Titles" [ref=e34] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewJobTitleList
              - listitem [ref=e35]:
                - link "Pay Grades" [ref=e36] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewPayGrades
              - listitem [ref=e37]:
                - link "Employment Status" [ref=e38] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/employmentStatus
              - listitem [ref=e39]:
                - link "Job Categories" [ref=e40] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/jobCategory
              - listitem [ref=e41]:
                - link "Work Shifts" [ref=e42] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/workShift
          - listitem [ref=e43]:
            - link "Organization" [ref=e44] [cursor=pointer]:
              - /url: "#"
            - list [ref=e45]:
              - listitem [ref=e46]:
                - link "General Information" [ref=e47] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewOrganizationGeneralInformation
              - listitem [ref=e48]:
                - link "Locations" [ref=e49] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLocations
              - listitem [ref=e50]:
                - link "Structure" [ref=e51] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewCompanyStructure
          - listitem [ref=e52]:
            - link "Qualifications" [ref=e53] [cursor=pointer]:
              - /url: "#"
            - list [ref=e54]:
              - listitem [ref=e55]:
                - link "Skills" [ref=e56] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewSkills
              - listitem [ref=e57]:
                - link "Education" [ref=e58] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewEducation
              - listitem [ref=e59]:
                - link "Licenses" [ref=e60] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLicenses
              - listitem [ref=e61]:
                - link "Languages" [ref=e62] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLanguages
              - listitem [ref=e63]:
                - link "Memberships" [ref=e64] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/membership
          - listitem [ref=e65]:
            - link "Nationalities" [ref=e66] [cursor=pointer]:
              - /url: /symfony/web/index.php/admin/nationality
          - listitem [ref=e67]:
            - link "Corporate Branding" [ref=e68] [cursor=pointer]:
              - /url: /symfony/web/index.php/admin/addTheme
          - listitem [ref=e69]:
            - link "Configuration" [ref=e70] [cursor=pointer]:
              - /url: "#"
            - list [ref=e71]:
              - listitem [ref=e72]:
                - link "Email Configuration" [ref=e73] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/listMailConfiguration
              - listitem [ref=e74]:
                - link "Email Subscriptions" [ref=e75] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewEmailNotification
              - listitem [ref=e76]:
                - link "Localization" [ref=e77] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/localization
              - listitem [ref=e78]:
                - link "Language Packages" [ref=e79] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/languagePackage
              - listitem [ref=e80]:
                - link "Modules" [ref=e81] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewModules
              - listitem [ref=e82]:
                - link "Social Media Authentication" [ref=e83] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/openIdProvider
              - listitem [ref=e84]:
                - link "Register OAuth Client" [ref=e85] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/registerOAuthClient
      - listitem [ref=e86]:
        - link "PIM" [ref=e87] [cursor=pointer]:
          - /url: /symfony/web/index.php/pim/viewPimModule
          - generic [ref=e88]: PIM
        - list [ref=e89]:
          - listitem [ref=e90]:
            - link "Configuration" [ref=e91] [cursor=pointer]:
              - /url: "#"
            - list [ref=e92]:
              - listitem [ref=e93]:
                - link "Optional Fields" [ref=e94] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/configurePim
              - listitem [ref=e95]:
                - link "Custom Fields" [ref=e96] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/listCustomFields
              - listitem [ref=e97]:
                - link "Data Import" [ref=e98] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/pimCsvImport
              - listitem [ref=e99]:
                - link "Reporting Methods" [ref=e100] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/viewReportingMethods
              - listitem [ref=e101]:
                - link "Termination Reasons" [ref=e102] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/viewTerminationReasons
          - listitem [ref=e103]:
            - link "Employee List" [ref=e104] [cursor=pointer]:
              - /url: /symfony/web/index.php/pim/viewEmployeeList/reset/1
          - listitem [ref=e105]:
            - link "Add Employee" [ref=e106] [cursor=pointer]:
              - /url: /symfony/web/index.php/pim/addEmployee
          - listitem [ref=e107]:
            - link "Reports" [ref=e108] [cursor=pointer]:
              - /url: /symfony/web/index.php/core/viewDefinedPredefinedReports/reportGroup/3/reportType/PIM_DEFINED
      - listitem [ref=e109]:
        - link "Leave" [ref=e110] [cursor=pointer]:
          - /url: /symfony/web/index.php/leave/viewLeaveModule
          - generic [ref=e111]: Leave
        - list [ref=e112]:
          - listitem [ref=e113]:
            - link "Apply" [ref=e114] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/applyLeave
          - listitem [ref=e115]:
            - link "My Leave" [ref=e116] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/viewMyLeaveList/reset/1
          - listitem [ref=e117]:
            - link "Entitlements" [ref=e118] [cursor=pointer]:
              - /url: "#"
            - list [ref=e119]:
              - listitem [ref=e120]:
                - link "Add Entitlements" [ref=e121] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/addLeaveEntitlement
              - listitem [ref=e122]:
                - link "Employee Entitlements" [ref=e123] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewLeaveEntitlements/reset/1
              - listitem [ref=e124]:
                - link "My Entitlements" [ref=e125] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewMyLeaveEntitlements/reset/1
          - listitem [ref=e126]:
            - link "Reports" [ref=e127] [cursor=pointer]:
              - /url: "#"
            - list [ref=e128]:
              - listitem [ref=e129]:
                - link "Leave Entitlements and Usage Report" [ref=e130] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewLeaveBalanceReport
              - listitem [ref=e131]:
                - link "My Leave Entitlements and Usage Report" [ref=e132] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewMyLeaveBalanceReport
          - listitem [ref=e133]:
            - link "Configure" [ref=e134] [cursor=pointer]:
              - /url: "#"
            - list [ref=e135]:
              - listitem [ref=e136]:
                - link "Leave Period" [ref=e137] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/defineLeavePeriod
              - listitem [ref=e138]:
                - link "Leave Types" [ref=e139] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/leaveTypeList
              - listitem [ref=e140]:
                - link "Work Week" [ref=e141] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/defineWorkWeek
              - listitem [ref=e142]:
                - link "Holidays" [ref=e143] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewHolidayList
          - listitem [ref=e144]:
            - link "Leave List" [ref=e145] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/viewLeaveList/reset/1
          - listitem [ref=e146]:
            - link "Assign Leave" [ref=e147] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/assignLeave
      - listitem [ref=e148]:
        - link "Time" [ref=e149] [cursor=pointer]:
          - /url: /symfony/web/index.php/time/viewTimeModule
          - generic [ref=e150]: Time
        - list [ref=e151]:
          - listitem
      - listitem [ref=e152]:
        - link "Recruitment" [ref=e153] [cursor=pointer]:
          - /url: /symfony/web/index.php/recruitment/viewRecruitmentModule
          - generic [ref=e154]: Recruitment
        - list [ref=e155]:
          - listitem [ref=e156]:
            - link "Candidates" [ref=e157] [cursor=pointer]:
              - /url: /symfony/web/index.php/recruitment/viewCandidates
          - listitem [ref=e158]:
            - link "Vacancies" [ref=e159] [cursor=pointer]:
              - /url: /symfony/web/index.php/recruitment/viewJobVacancy
      - listitem [ref=e160]:
        - link "My Info" [ref=e161] [cursor=pointer]:
          - /url: /symfony/web/index.php/pim/viewMyDetails
          - generic [ref=e162]: My Info
        - list [ref=e163]:
          - listitem
      - listitem [ref=e164]:
        - link "Performance" [ref=e165] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e166]: Performance
        - list [ref=e167]:
          - listitem [ref=e168]:
            - link "Configure" [ref=e169] [cursor=pointer]:
              - /url: "#"
            - list [ref=e170]:
              - listitem [ref=e171]:
                - link "KPIs" [ref=e172] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchKpi
              - listitem [ref=e173]:
                - link "Trackers" [ref=e174] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/addPerformanceTracker
          - listitem [ref=e175]:
            - link "Manage Reviews" [ref=e176] [cursor=pointer]:
              - /url: "#"
            - list [ref=e177]:
              - listitem [ref=e178]:
                - link "Manage Reviews" [ref=e179] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchPerformancReview
              - listitem [ref=e180]:
                - link "My Reviews" [ref=e181] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/myPerformanceReview
              - listitem [ref=e182]:
                - link "Review List" [ref=e183] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchEvaluatePerformancReview
          - listitem [ref=e184]:
            - link "My Trackers" [ref=e185] [cursor=pointer]:
              - /url: /symfony/web/index.php/performance/viewMyPerformanceTrackerList
          - listitem [ref=e186]:
            - link "Employee Trackers" [ref=e187] [cursor=pointer]:
              - /url: /symfony/web/index.php/performance/viewEmployeePerformanceTrackerList
      - listitem [ref=e188]:
        - link "Dashboard" [ref=e189] [cursor=pointer]:
          - /url: /symfony/web/index.php/dashboard
          - generic [ref=e190]: Dashboard
        - list [ref=e191]:
          - listitem
      - listitem [ref=e192]:
        - link "Directory" [ref=e193] [cursor=pointer]:
          - /url: /symfony/web/index.php/directory/viewDirectory/reset/1
          - generic [ref=e194]: Directory
        - list [ref=e195]:
          - listitem
      - listitem [ref=e196]:
        - link "Maintenance" [ref=e197] [cursor=pointer]:
          - /url: /symfony/web/index.php/maintenance/purgeEmployee
          - generic [ref=e198]: Maintenance
        - list [ref=e199]:
          - listitem [ref=e200]:
            - link "Purge Records" [ref=e201] [cursor=pointer]:
              - /url: "#"
            - list [ref=e202]:
              - listitem [ref=e203]:
                - link "Employee Records" [ref=e204] [cursor=pointer]:
                  - /url: /symfony/web/index.php/maintenance/purgeEmployee
              - listitem [ref=e205]:
                - link "Candidate Records" [ref=e206] [cursor=pointer]:
                  - /url: /symfony/web/index.php/maintenance/purgeCandidateData
          - listitem [ref=e207]:
            - link "Access Records" [ref=e208] [cursor=pointer]:
              - /url: /symfony/web/index.php/maintenance/accessEmployeeData
      - listitem [ref=e209]:
        - link "Buzz" [ref=e210] [cursor=pointer]:
          - /url: /symfony/web/index.php/buzz/viewBuzz
          - generic [ref=e211]: Buzz
        - list [ref=e212]:
          - listitem
    - generic [ref=e214]:
      - heading "Add Employee" [level=1] [ref=e216]
      - group [ref=e219]:
        - list [ref=e220]:
          - listitem [ref=e221]:
            - generic [ref=e222]: Full Name
            - list [ref=e223]:
              - listitem [ref=e224]:
                - generic [ref=e225]:
                  - emphasis [ref=e226]: "*"
                  - text: First Name
                - textbox [ref=e227]
              - listitem [ref=e228]:
                - generic [ref=e229]: Middle Name
                - textbox [ref=e230]
              - listitem [ref=e231]:
                - generic [ref=e232]:
                  - emphasis [ref=e233]: "*"
                  - text: Last Name
                - textbox [ref=e234]
          - listitem [ref=e235]:
            - generic [ref=e236]: Employee Id
            - textbox "Employee Id" [ref=e237]: "0074"
          - listitem [ref=e238]:
            - generic [ref=e239]: Photograph
            - button "Photograph" [ref=e240]
            - generic [ref=e241]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - listitem [ref=e242]:
            - generic [ref=e243]: Create Login Details
            - checkbox "Create Login Details" [ref=e244]
          - listitem [ref=e245]:
            - emphasis [ref=e246]: "*"
            - text: Required field
        - paragraph [ref=e247]:
          - button "Save" [ref=e248]
  - generic [ref=e249]:
    - text: OrangeHRM 4.10.1
    - text: © 2005 - 2026
    - link "OrangeHRM, Inc" [ref=e250] [cursor=pointer]:
      - /url: http://www.orangehrm.com
    - text: . All rights reserved.
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