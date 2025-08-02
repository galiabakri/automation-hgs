Feature: Job Search and Apply on HGS Careers Site

  Scenario: Search for jobs and validate required fields during apply
    Given I open the HGS career page
    And I dismiss the Nigeria popup if present
    When I search for "Customer" in "NEW YORK"
    Then I should see at least one job with title "Customer Sales Representative Work@Home"
    When I search for "Consultant" in "WARRENVILLE"
    Then I should see at least one job with title "Senior Consultant"
    When I select the first job and click apply
    And I fill in the first name "Rajamani" and last name "Saravanan"
    And I click the Apply button
    Then I should see an error message "Phone number is mandatory"
