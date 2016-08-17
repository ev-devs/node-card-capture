# This will help you find the vendor and product id

import sys
import usb.core
# find USB devices
dev = usb.core.find(find_all=True)
# loop through devices, printing vendor and product ids in decimal and hex
num = 0
for cfg in dev:
  num = num + 1
  print num
  sys.stdout.write('Decimal VendorID=' + str(cfg.idVendor) + ' & ProductID=' + str(cfg.idProduct) + '\n')
  sys.stdout.write('Hexadecimal VendorID=' + hex(cfg.idVendor) + ' & ProductID=' + hex(cfg.idProduct) + '\n\n')
