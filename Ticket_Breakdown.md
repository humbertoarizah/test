# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
---
# Ticket 0001 - Add new field: custom_company_id

### Current Implementation
When we are trying to find an agent, We are currently using the internal database id.

### Description
As a Facility I would like to save my own custom id for each of my Agents. The desire solution is to add a **new custom field(custom_agent_id)** in the table of Agents to been able to look up them by this new field. It will be **required** to **index** this new field as will be use to search the Agents.


### Acceptance Criteria
**When:** Some Facility is creating a new Agent.

**Then:** The custom_agent_id field is display with the label: **Agent Id**, If the field is not filled use the internal id

**When** A Facility is updating an Agent.

**Then** The custom_agent_id field is display with the label: **Agent Id**. If the field is not filled use the internal id


### Potential Issues
None

### Notes
Validate the ORM that we are using to check how to create the index of this field.

---
# Ticket 0002 - update the function `getShiftsByFacility` to bring the new field: custom_agent_id
### Description
As a Facility I would like to save my own custom id for each of my Agents. The desire solution is to add a **new custom field(custom_agent_id)** in the table of Agents to been able to look up them by this new field. It will be **required** to **index** this new field as will be use to search the Agents.

In the function `getShiftsByFacility` We need to receive the new field from the database.

### Acceptance Criteria
**When:** The function `getShiftsByFacility` is called.

**Then:** The payload received about the agents should include the new field **custom_agent_id**

### Potential Issues
None. This is blocked waiting for @Ticket_0001
### Notes
Validate the ORM how to update the request to the database in order to been able to bring this new field.

@QA_LEAD: This new feature will require full testing for generate reports.






# Assumptions
- There is some Front End that allow to update all the fields that are arriving in the profiles of the Agents without any code change (or will require to add all the logic for include this into the CRUD of Agents in FE and BE)