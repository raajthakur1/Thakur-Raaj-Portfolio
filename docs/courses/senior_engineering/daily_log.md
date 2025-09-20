# Advanced Topics in Engineering (H) Daily Log

Welcome to my daily log for engineering! Here, I will outline what I do every day in class.

## Navigation

| [September](#september) | [October](#october) | [November](#november) | [December](#december) | [January](#january) |
|-------------------------|---------------------|-----------------------|-----------------------|---------------------|
|**[February](#february)**|**[March](#march)**  |**[April](#april)**    |**[May](#may)**        |**[June](#june)**    |

## September {.collapsible}

### 09.03.2025 

Today, I continued work on my wooden pen. I took my two blocks of wood and turned them on a lathe. I took a chisel and removed material until the blocks were cylindrical, and when they got to the desired thickness, I used fine grit sandpaper to smooth the two blocks. Now, I have the two wooden components for my pen ready, and now, I can assemble the pen and do all of the finishing touches next class.

### 09.04.2025 

Today, I finished my pen. I started off by using the pen press to:

- Press the pen tip into the bottom end of the lower barrel 
- Press the ink chamber into the top end of the lower barrel
- Press the clip assembly into the top end of the upper barrel

<img src="courses/senior_engineering/media/pen/step1.jpeg" alt="Step 1" width="300"/> <img src="courses/senior_engineering/media/pen/step2.jpeg" alt="Step 2" width="300"/>

Once I pressed these components, I could assemble the main sections together. I screwed the ink refill into the ink chamber, slid the ring onto the chamber above the lower barrel, and slid the upper barrel above the ring. Once I did that, my pen was done, and it wrote super well, along with looking very cool.

<img src="courses/senior_engineering/media/pen/step3.jpeg" alt="Step 3" width="300"/> <img src="courses/senior_engineering/media/pen/step4.jpeg" alt="Step 4" width="300"/> <img src="courses/senior_engineering/media/pen/drawing.jpeg" alt="Drawing" width="300"/> 

### 09.05.2025 

Today, I did some research and work on my capstone project. My goal is to assemble the board as soon as possible, so today, I practiced soldering random components to practice boards to prepare for soldering intricate components on the board.

### 09.08.2025 

Today, I researched more about how to configure ArduPilot for a custom board. I decided that I would have to compile ArduPilot from the source code with a custom hwdef.dat file for my specific hardware configuration. From the start, I knew that I wanted to do as much as possible in VSCode, as I am very familiar with it. After doing some researching, I discovered that ArduPilot provides a VSCode integration which allows you to configure and flash ArduPilot directly from VSCode. All I have to do is make a custom board definition (hwdef.dat) for my specific hardware detailing what components I have and how they are connected, then I can use that board definition in the ArduPilot configurator to flash it. 

Conveniently, the extension has a built-in tool to make sure that your machine's ArduPilot environment has all of the necessary tools to build and flash the software. I had to install a lot of stuff, such as:

- Python MAVLink (`pip install pymavlink`)
- MAV Proxy (`pip install mavproxy`)
- J-Link ([**through SEGGER application**](https://www.segger.com/downloads/jlink/))

In addition, I had to create symlinks between ccache and g++, gcc, arm-none-eabi-gcc, and arm-none-eabi-g++. I did so by adding this line to my ZSH profile (~/.zshrc: `export PATH="/opt/homebrew/opt/ccache/libexec:$PATH"`, then verifying that the installations of ccache, gcc, g++, arm-none-eabi-gcc, and arm-none-eabi-g++ were correct by typing `which` + the name of the toolchain.

I made sure that they were all installed, but I was unclear as to what exactly their purpose was. I did some digging and these were the results I found:

- GCC: GNU Compiler Collection's C compiler
- G++: GNU Compiler Collection's C++ compiler
- arm-none-eabi-gcc: Compiles .c code into machine code for the ARM Cortex-M family of CPUs
- arm-none-eabi-gcc: Compiles .cpp code into machine code for the ARM Cortex-M family of CPUs

Together, these toolchains work together to compile the .c and .cpp files that make up the ArduPilot source code in order to create machine code for the ARM Cortex-M CPU (STM32F7).

### 09.09.2025

Today, I did some more research on how to set up the software

### 09.15.2025 

I dedicated today to working on my GitHub documentation. Mr. Dubick taught the class on how to use GitHub, and I worked on refining format and writing out some pages on Github.

### 09.16.2025 

Today, I printed out two parts for my drone. Although I intend to make my final parts out of either PETG or ABS with 50-80% infill, I printed this part out of PLA since all of the printers in the lab are loaded with PLA, and since it is easier to work with. To save time, I used 15% infill, and to support overhangs, I used tree supports. 

After printing the parts out, I confirmed that my battery would fit in the space. The battery was a perfect fit for the space, although I was a little worried about not having enough clearance for screw heads. Although there is space in the CAD mockup, I may inset the screw heads to allow for more room. 

The main issues with the parts had to do with durability. The parts have long cylinders for screws to slot into and clamp down on the chassis. Although the screws will add a lot of support, the cylinders are brittle and break easily. To fix this issue, I will add fillets to the base of the cylinders. Also, the plates are pretty thin, so I will have to thicken them by 1-2 in order to reduce flexing. 

### 09.17.2025 

## October

## November

## December

## January

## February

## March

## April

## May

## June