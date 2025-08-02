# automation-hgs
Automated testing framework that uses: -CucumberJS for BDD test scenarios +Taiko for browser automation +JavaScript
# HGS Career Site Automation

This project is a lightweight end-to-end automated testing framework built with:

-  [CucumberJS](https://github.com/cucumber/cucumber-js) – for Behavior Driven Development (BDD)
-  [Taiko](https://taiko.dev) – for browser automation
-  JavaScript – the core language
-  GitHub Actions – for Continuous Integration (CI)

---

##  Scenario Tested

This automation covers an integrated user journey on the HGS careers site:

1. Open the URL: https://www.joinhgs.com/us/en
2. Dismiss the Nigeria popup if it appears.
3. Search for:
   - `"Customer"` in `"NEW YORK"` – expect a job titled: **Customer Sales Representative Work@Home**
   - `"Consultant"` in `"WARRENVILLE"` – expect a job titled: **Senior Consultant**
4. View the first listed job and click **Apply**.
5. Fill in First Name as `Rajamani` and Last Name as `Saravanan`.
6. Submit the form without a phone number.
7. Assert that an error message appears: **"Phone number is mandatory"**
8. Contact
Created by Galya Bakri
🔗 GitHub Profile  https://github.com/galiabakri
📧 Open to contributions and feedback!





