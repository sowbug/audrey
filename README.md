audrey
--

A circa-2001 project to open up the 3Com Audrey internet appliance.

As far as I know, I'm the one who hacked this first, though I'm sure
someone else would have done it eventually. In the summer of 2001, I was
messing around with the Audrey (which had been discontinued and was being
sold on auction sites for about $50). I was writing about my efforts online,
and at least a few other hackers were paying attention. When I broke it (as
in mistakenly caused it to stop working), a kind person who preferred to
remain anonymous mailed me a replacement mainboard, along with a copy of the
Audrey's firmware image. I was back in business, and as a bonus, now I was
able to examine the firmware on a separate machine.

I reverse-engineered the checksum algorithm that the bootloader wanted,
which meant I could change the firmware. I added some files to take advantage
of the fact that the web browser was running as root, which let me get a root
shell on the device.

The person who sent me the firmware image asked me not to redistribute it,
but I was able to help others discover a pre-existing hole (not sanitizing
query params) in production firmware. At that point anyone with an Audrey
could pop up a root pterm, and the hacker community took off.
