# Troubleshooting

## Project Introduction

This project was focused on troubleshooting various aspects of networks through CLI commands. Both MacOS and Ubuntu in a VM were used. 

## Important Terminology

|Term|Definition|
|----|----------|
|Wi-Fi|Protocol that uses radio waves to wirelessly connect devices to a local network|
|Ethernet|Protocol that uses cables to connect devices to a local network|
|Network Adapter|Hardware that lets a computer communicate with the network (NIC in a PC)|
|IP Address|Identifiable address given to any device on a network|
|Default Gateway (Router)|Device that connects the local network to the internet. Metaphor: exit ramp connecting a neighborhood to a highway.|
|DNS|Domain Name System; translates website names to IP addresses|
|Ping|CLI command that test communication between devices|
|NAT/Shared Networking|Network Address Translation; VM shares host's IP address|
|Bridged Networking|VM appears as its own device with a separate IP from the host|

## 4 Step Troubleshooting Workflow

1. Test the Physical Connection
    - Check if Wi-Fi is turned on or if Ethernet is plugged in
    - Check Wi-Fi/Ethernet settings in MacOS/Windows/Linux

2. Check the IP Address
    - MacOS: Run `ifconfig`, then look for en0/en1 and make sure that at least one of them lists `inet: 192.168.x.x or 10.x.x.x`
    - Linux: Run `ip addr`, then look for en0/en1 (or enp0s if inside a VM) and make sure that at least one of them lists `inet: 192.168.x.x or 10.x.x.x`
    - If it lists 169.254.x.x, that means that the device has a **self-assigned IP address**, meaning it likely can't connect to the internet

3. Test Basic Reachability
    - Ping a public server from Google or Cloudflare with `ping -c 4 8.8.8.8` or `ping -c 4 1.1.1.1`, respectively, to make sure that the computer can communicate with them
    - If this works, then the computer can connect to the internet

4. Test the DNS
    - After confirming that `ping -c 4 8.8.8.8` works, check the DNS with `ping -c 4 google.com`. 8.8.8.8 is Google's public DNS, meaning that when you connect to 8.8.8.8, you connect to google.com, and vice versa. 
    - If the computer can connect to the IP address (8.8.8.8) but not the domain name (google.com), then there is a DNS issue

    ##