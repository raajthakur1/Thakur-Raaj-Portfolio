# Enterprise Physical Security Threat Analysis

In this activity, physical security vulnerabilities in a pharmaceutical company were explored and patched.

## Table of Contents

- [**Physical Vulnerabilities Relevant to a Pharmaceutical Research Company**](#physical-vulnerabilities-relevant-to-a-pharmaceutical-research-company)
- [**Physical Security Plan**](#physical-security-plan)
- [**Diagram of New Security Plan**](#diagram-of-new-security-plan)
- [**Risk-Based Justification**](#risk-based-justification)

## Physical Vulnerabilities Relevant to a Pharmaceutical Research Company {.collapsible}

In a facility with highly confidential information such as a pharmaceutical research company, physical security is of the upmost importance. Common vulnerabilties that companies may overlook include:

- Unrestricted access to spaces with sensitive information (such as research or financial information)
    - This vulnerability would exist in confidential facilities within the campus such as research labs and the admin wing with financial documents, and presents severe risk since it allows unauthorized people to access highly confidential and valuable information even though they shouldn't be able to
- Lack of security cameras in secure areas or in hallways leading to secure areas
    - This vulnerability, similarly to the previous one, would exist near confidential facilities. This vulnerability presents a risk since it does not allow the security team to know when people entered or exited the secure area or where in the building they are coming from.
- Unsecured network closets that leave network infrastructure exposed
    - This vulnerability would exist in network server rooms and closets throughout the campus. This vulnerability presents a risk since it allows unauthorized people to access critical network infrastructure, potentially disrupting operations, stealing sensitive data, or installing malicious devices without detection.
- Lack of night vision cameras to help monitor areas even when it is dark
    - This vulnerability would exist in exterior areas, parking lots, and loading docks around the facility. This vulnerability presents a risk since it does not allow the security team to monitor activities during nighttime hours, making it easier for intruders to conduct surveillance or attempt unauthorized access when visibility is limited.
- Short fence that can easily be climbed
    - This vulnerability would exist at the perimeter of the campus. This vulnerability presents a risk since it allows unauthorized people to bypass the outer security boundary and gain physical access to the facility grounds and building entrances.
- Lack of biometric authentication to enter the campus
    - This vulnerability would exist at main entrances and gateways to secure areas. This vulnerability presents a risk since traditional access methods like keycards and passwords can be stolen, duplicated, or shared with unauthorized individuals, whereas biometric authentication provides a more secure verification method that cannot be easily compromised.

## Physical Security Plan {.collapsible}

In order to secure the facility, the following controls would be implemented.

### Environmental Controls

The environment of such a facility is very important. Factors such as temperature, air quality, humidity, and fire suppression systems must all be carefully implemented.

**Temperature:**
- Due to the precise nature of pharmaceutical research, technicians and researchers must have precise control over temperature of individual rooms in order to optimize for whatever compound they are testing.
- This would be regulated by having individual AC compressors, heaters, and thermostats for every room and connecting the thermostats to the network in order to have precise control and monitoring of the temperature in every single room of the facility.

**Humidity:**
- Similarly to temperature, even slight variations in ambient humidity can throw off a reaction or experiment. Therefore, technicians and researchers must have precise control over the individual rooms in order to optimize for whatever compound they are testing.
- This would be regulated by having individual humidifiers and dehumidifiers for every room and connecting them to the network in order to have precise control and monitoring of the humidity in every single room of the facility.

**Air Quality:**
- Conducing experiments in a pharmaceutical environment can release toxic fumes into the air. Therefore, high quality, industrial-grade air filtration systems are extremely important in a pharmaceutical environment. 
- To ensure high air quality, air filtration systems would be installed in every single research lab, and would also be spread throughout hallways and conference rooms to maintain pristine air quality. They would be connected to the LAN in order to facilitate precise control and monitoring.

**Fire Suppression Systems:**
- Safety is of the upmost importance, and experiments can possibly lead to fires. Therefore, fire suppression systems should be installed in every single research lab and should be connected to smoke detectors, as well as the LAN in case the smoke detectors don't trigger the suppression system. Along with smoke detectors and fire suppression systems, the temperature sensors in each research lab would be able to detect a surge of heat and automatically set off the suppression system.

### Access Controls

**Badges:**
- Electronic access badges are essential for controlling who can enter restricted areas within the facility. Each employee would be issued a unique badge that grants access only to areas relevant to their job role.
- Badges would be integrated with a centralized access control system connected to the LAN, allowing administrators to monitor entry and exit times, revoke access immediately if needed, and generate audit logs of all access attempts to sensitive areas.

**Biometrics:**
- Biometric authentication such as fingerprint or iris scanning provides a more secure layer of access control than badges alone, as it cannot be stolen or shared.
- Biometric readers would be installed at the entrances to the most sensitive areas such as research labs, data centers, and executive offices. All biometric data would be encrypted and stored securely on isolated systems to prevent unauthorized access.

**Mantraps:**
- Mantraps, also known as access vestibules or airlocks, are small controlled spaces between two doors that prevent unauthorized people from following legitimate employees into restricted areas.
- Mantraps would be installed at the main entrances to research labs, server rooms, and the executive wing. Only one person at a time would be allowed through based on badge and biometric verification, preventing tailgating.

**Zoning:**
- Zoning divides the facility into different security levels based on the sensitivity of the information and equipment in each area. This ensures that unauthorized individuals can only access areas relevant to their role.
- The facility would be divided into zones such as public areas (lobbies and conference rooms), employee areas (offices and break rooms), restricted areas (research labs), and highly restricted areas (executive offices and data centers). Access controls would be progressively stricter as you move to higher security zones. 

### Surveillance and Detection

**Cameras:**
- Security cameras are critical for monitoring facility access, detecting unauthorized entry, and providing evidence in case of a security incident or theft.
- High-resolution cameras with night vision capability would be installed throughout the facility, including hallways, research labs, server rooms, loading docks, parking lots, and exterior perimeter areas. All camera feeds would be recorded continuously and stored on a secure network server for at least 90 days.

**Monitoring Rooms:**
- A dedicated security monitoring room staffed by trained security personnel allows real-time surveillance and rapid response to security incidents.
- A central monitoring station would be established where security staff can observe live feeds from all cameras, receive alerts from alarm systems, and communicate with facility personnel. This room would be secured with its own access controls and would have redundant communication systems.

**Alarms:**
- Alarm systems provide immediate alerts when unauthorized access is detected or when doors to restricted areas are opened improperly.
- Motion sensors would be installed in high-value areas such as research labs and server rooms. Door and window sensors would be placed on all exterior exits and restricted area entrances. All alarms would be connected to the central monitoring station and would trigger automatic notifications to security personnel and management.

**Logging:**
- Comprehensive logging of all access attempts, alarms, and camera footage provides an audit trail for investigating incidents and identifying security vulnerabilities.
- All badge swipes, biometric scans, alarm triggers, and camera recordings would be logged to a centralized, tamper-proof system. Access logs would be regularly reviewed for suspicious patterns, and reports would be generated for compliance and security audits. 

### Hardware Security

**Locked Racks:**
- Locked server racks prevent unauthorized people from physically tampering with, stealing, or disconnecting critical networking and computing hardware.
- All servers and networking equipment would be stored in locked, climate-controlled racks within restricted server rooms. Only authorized IT personnel with proper credentials would be allowed to access these racks, and all physical access would be logged.

**Secured Network Closets:**
- Network closets contain critical infrastructure such as switches, routers, and patch panels. Securing these spaces prevents intruders from installing rogue devices or disrupting network operations.
- All network closets throughout the facility would be locked and accessible only to authorized IT and network personnel. These closets would have biometric access controls and surveillance cameras to monitor who enters and what modifications are made to the network infrastructure.

**Port Protection:**
- Exposed network ports can be used to connect unauthorized devices to the network, allowing attackers to access sensitive data or inject malware.
- All unused network ports on switches and patch panels would be disabled and physically secured. Occupied ports would be documented and monitored. Additionally, physical port locks would be used to prevent unauthorized devices from being plugged into critical network infrastructure. 

### Personnel and Procedures

**Visitor Handling:**
- Visitors can pose a significant security risk if not properly controlled, as they may be unauthorized individuals attempting to gain access to sensitive areas or gather intelligence about facility operations.
- All visitors would be required to sign in at a main security desk and receive a temporary, time-limited badge. Visitors would be restricted to designated public areas only and would not be allowed to access research labs, server rooms, or executive offices without explicit authorization from a department head.

**Escort Policies:**
- Escort policies ensure that visitors and contractors with legitimate access to sensitive areas are always supervised by an authorized employee.
- Any visitor or contractor requiring access to restricted areas would be required to be accompanied by an employee with appropriate clearance for that area at all times. The escorting employee would be responsible for ensuring the visitor does not access unauthorized equipment or information and would document the visit in the access log.

**Access Reviews:**
- Regular reviews of who has access to what areas ensure that access controls are up-to-date and that former employees or personnel whose roles have changed no longer have unnecessary access.
- Access reviews would be conducted quarterly, with managers reviewing which employees have access to their department's restricted areas. Employees who have changed roles or left the company would have their access immediately revoked. These reviews would be documented and maintained for compliance purposes.

**Training:**
- All employees must understand security policies and procedures to ensure they follow them consistently and recognize potential security threats.
- All employees would receive annual security awareness training covering topics such as badge security, escort policies, recognizing suspicious individuals, reporting security concerns, and consequences of violating security policies. New employees would receive security training as part of their onboarding process. 

## Diagram of New Security Plan {.collapsible}



## Risk-Based Justification {.collapsible}

