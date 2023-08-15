## Networking layer 

There are various layer of network are as follow 
- ###  Physical layer 
   - Like Ethernet cable
     - Information is travel in the form of 0 and 1 
- ### Data link layer 
  - In data link we have switches and these switches will receive those 0 and 1 and they will combine it into whole frame thing 
  - so they will extract the MAC address, the destination MAC address, the source MAC address and they were create the 
  and then send these frame using physical layer 
- ### Network Layer
  - Network layer helps us to connect multiple or so many computer and send the data into packets
  - Suppose we need to send the data the data to goa sitting in mumbai network layer can came into picture here with so many router
- ### Transport Layer 
  - Transport layer make sure that if the data is lost somewhere it again send the request to get the lost piece of data 
- ### Application Layer
  - if the data is move to this layer its called data 
  - this is where we set up our http application ftp server ssh and many many other thing 

Now there are some different models like there is TCP ip model which combine bottom two layer into one layer. OSI model break application layer into three layer.

- ### Physical layer 
  - Signal , Binary Transmission
    -  Signal in cable move in bits it mean in each milisecond it check whether or  not there is light 
- ### Data link layer 
  - MAC Addressess
    - Information about which MAC address is sending that data and what  machine that connected to that switch has that MAC address 
- ### Network layer
  - IP Addresses , Path Determination
    - In Network layer we care lot about IP Address
- ### Transport layer 
  - End to End Connection - Protocol TCP/UDP  
- ### Application Layer 
  - Node.js
  - Some example falls in this layer is http , smtp , ssh , ftp 

