# Three way hand shaking
Node use three way hand shaking method to establish connection whenever we need reliability. TCP is full duplex mode communication 

![Three Way Hand Shaking](./TCP.png)

## Seq No.
Sequence no. is the randomly generated no. assigned to the TCP connection header. randomization make sure that the seq is not repeated 

## SYN Flag 
The value of the SYN flag would be 1 at first request.  if the value is 1 means it is true and 0 means false 

## Window Size 
Window size is used to make sure flow control of data in bytes. 

The TCP window size, or as some call it, the TCP receiver  window size, is simply an advertisement of how much data (in bytes) the receiving device is willing to receive at any point in time. The receiving device can use this value to control the flow of data, or as a flow control mechanism

## Options
   - ### MSS
     - Maximum Segment Size
    MSS (maximum segment size) limits the size of packets, or small chunks of data, that travel across a network, such as the Internet. All data that travels over a network is broken up into packets. Packets have several headers attached to them that contain information about their contents and destination. MSS measures the non-header portion of a packet, which is called the payload.

## Passive Mode To Active No.
Once the server get the syn request it turns from passive mode to active mode and send back the acknowledgement number  if the sequence no. is 9000 then the acknowledgement number will be 9001 After acknowledgement ACK will be turns to 1 and SYN will be 1 and WS will be the x bytes and server also send the sequence number and also send its own port

## Last HandShake (Client Acknowledgement)
In the last hand shake if the server send the sequence number 3000 then the acknowledment number would be 3001 and the ACK number will be 1

Then the data start sharing
