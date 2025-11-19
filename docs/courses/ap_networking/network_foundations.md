# Networking Foundations: Layers, Cables, and Connectivity

This project was focused on exploring aspects of a network that make up layers 1 and 2 of the OSI model, such as Ethernet cables, IP addresses, physical layout, and more. These aspects were investigated through various activities. 

## Table of Contents

- [**Exploring IP Addresses in Shared and Bridged Modes in UTM**](#exploring-ip-addresses-in-shared-and-bridged-modes-in-utm)
- [**Network Topology Activity**](#network-topology-activity)
- [**Cable Constructing and Testing**](#cable-constructing-and-testing)
- [**Exploring Layers 1 and 2 of the OSI Model (Network Access Layer of TCP/IP Model)**](#exploring-layers-1-and-2-of-the-osi-model-network-access-layer-of-tcpip-model)
- [**Building and Testing a Small Office / Home Office (SOHO) Network**](#building-and-testing-a-small-office--home-office-network-collapsible)
- [**Reflection**](#reflection)

## Exploring IP Addresses in Shared and Bridged Modes in UTM {.collapsible}

This activity explored how Shared (NAT) and Bridged network modes in UTM affect a VM's IP address and how it connects to the internet.

### Part 1: Exploring Shared (NAT) Mode

Before doing anything, the VM had to be set to Shared (NAT) mode. To do so, the VM's settings were edited in UTM by right clicking the VM, selecting network settings in the left sidebar, and changing the network mode to "Shared". 

Once the VM was set to Shared Network mode, the internal IP address was found with `ip a`, resulting in the following output:

![ip a in Shared Mode](media/network_foundations/ip_shared.png){ width=400 }

|Term|Explanation|
|----|-----------|
|inet|IPv4 address (192.168.64.2)|
|/24|Represents the **subnet mask** (255.255.255.0), which signifies that the first 24 bits (192.168.64) of the IP address designate the network and the remaining 8 bits designate the device on the network|
|brd 192.168.64.255|The **broadcast address** for the subnet|
|scope global dynamic enp0s1|“Global” means this IP can reach outside the VM (through NAT), and “dynamic” means it was assigned automatically (DHCP).|

Private IP addresses reveal how the device interacts with the LAN, not the internet. To see a device's IP on the internet, otherwise known as a **public IP address**, a website such as [https://whatismyipaddress.com](https://whatismyipaddress.com) can be used to find it. The VM's public IP was 173.95.44.210.

![Public IP in Shared](media/network_foundations/public_ip.png){ width=400 }

In Shared mode, the public and private IPs were different. 192.168.64.2 belonged to the LAN whereas 173.95.44.210 belonged to the internet. Shared mode might be used by a VM when connecting to the internet because it appears as the same device as the host machine on the LAN and is subject to the same firewall and device restrictions as the host. Shared mode also makes it easier to connect multiple VMs on a single computer since they all share an IP address, making it easier to work with than dealing with individual IPs for each VM.

### Part 2: Exploring Bridged Mode

After exploring Shared (NAT) Mode in UTM, bridged mode was explored. To switch the VM from Shared to Bridged mode, the VM was shut down, then its network settings were changed. Once this change was made, the VM was started again. Once Ubuntu was loaded, a similar procedure was followed. The IP address was again found with `ip a`. However, the results were different:

![ip a in Bridged Mode](media/network_foundations/ip_bridged.png){ width=400 }

Then, the public IP was checked with [the same website](https://whatismyipaddress.com). While the private IP was completely different, the public IP was exactly the same (173.95.44.210). 

![Public IP in Bridged](media/network_foundations/public_ip.png){ width=400 }

While the private IP address changed from 192.168.64.2 to 10.1235.30, the public IP address did not change at all. This is because the IP address of the device has no impact on the router's IP address, which is what determines the public IP. In Bridged Mode, the VM appears as an entirely different computer on the LAN, which is very different to Shared Mode. This quality would lead to an organization often choosing Bridged over Shared mode in a corporate environment because corporations may use a VM to test out new software, and while testing, they would want to make sure that the software is in an environment as similar to as a real computer as possible. Shared mode simply does not provide such an environment, whereas Bridged mode is ideal for such an application. However, the fact that Bridged mode behaves like a separate computer poses a security risk, as it could provide an opportunity to bypass network or device restrictions imposed on the host machine.

### Comparison Table

|Mode|Private IP|Public IP|
|----|----------|---------|
|Shared (NAT)|192.168.64.2|173.95.44.210|
|Bridged|10.12.25.30|173.95.44.210|

When comparing the two modes, Shared mode appears as the same device as the host on the network, whereas Bridged mode appears as a separate device. Due to this quality, Shared mode provides a safer, more controlled environment whereas Bridged mode provides an environment akin to a physical computer. 

### Reflection



## Network Topology Activity {.collapsible}

## Cable Constructing and Testing {.collapsible}

## Exploring Layers 1 and 2 of the OSI Model (Network Access Layer of TCP/IP Model) {.collapsible}

## Building and Testing a Small Office / Home Office Network {.collapsible}

## Reflection {.collapsible}