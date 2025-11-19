# Why Can't These Two Computers Talk to Each Other?

## Project Introduction

This project was a 1 day activity where a partner and I investigated why two computers connected with a working Ethernet cable are still unable to communicate. Both computers were running 2 different Ubuntu virtual machines, however they were unable to ping each other. 

## Part 1

Before doing anything, the connection was verified by inspecting the Ethernet port and cable on both of the Mac mini computers. Once the Ethernet connection was confirmed to be good, 2 VMs were opened on each Mac mini: an Ubuntu 25.10 ARM64 VM using Apple Virtualization, and an Ubuntu 22.04 ARM64 VM using QEMU. Then, `ip a` was run on each VM to obtain the IP address and status for each VM. All of them returned an IP address and reported "state UP", meaning that there is an active connection.

**Ubuntu 25.10 w/ Apple Virtualization:**

![New VM](media/why_cant_these_computers_communicate/new_vm_ip.png){ width=400 }

<br>

**Ubuntu 22.04 w/ QEMU:**

![Old VM](media/why_cant_these_computers_communicate/old_vm_ip.png){ width=400 }

## Part 2

After it was verified that all of the VMs had IP addresses, we made sure that they were on the same Layer 2 network. This was tested by pinging each other's IP address. A pattern was observed: the Ubuntu 22.04 VM could only ping my partner's Ubuntu 25.10 VM and not his 22.04 VM, whereas the Ubuntu 25.10 VM could only ping his 22.04 VM, not his 25.10 VM. He observed the same phenomenon.

**Pinging 22.04 from 25.10**

![25.10 &Rightarrow; 22.04](media/why_cant_these_computers_communicate/new2old.png)

<br>

Here, pinging my partner's 22.04 VM from my 25.10 VM was successful.

<br>

**Pinging 25.10 from 25.10**

![25.10 &Rightarrow; 25.10](media/why_cant_these_computers_communicate/new2new.png)

<br>

Here, pinging my partner's 25.10 VM from my 25.10 VM was unsuccessful.

<br>

**Pinging 25.10 from 22.04**

![22.04 &Rightarrow; 25.10](media/why_cant_these_computers_communicate/old2new.png)

<br>

Here, pinging my partner's 25.10 VM from my 22.04 VM was successful.

<br>

**Pinging 22.04 from 22.04**

![22.04 &Rightarrow; 22.04](media/why_cant_these_computers_communicate/old2old.png)

<br>

Here, pinging my partner's 22.04 VM from my 22.04 VM was unsuccessful.

<br>