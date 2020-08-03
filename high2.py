import cv2
import numpy as np
import math
import time
#from nms import non_max_suppression_fast
#import navigation/nav_interface
#import json




image = cv2.imread("images/eye.png")

#video = cv2.VideoCapture("gateC.mp4")
#video = cv2.VideoCapture("gateB.mp4")
#video = cv2.VideoCapture(0)

# Downscale the image to a reasonable size to reduce compute
scale = 1

i = 0

# Minimize false detects by eliminating contours less than a percentage of the image
area_threshold = 0.01
croppedPixels = 150


image = cv2.GaussianBlur(image, (5, 5), 0)

hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

mask0 = cv2.inRange(hsv,(0, 10, 10), (25, 255, 255) )
mask2 = cv2.inRange(hsv,(0, 0, 255), (10, 10, 255) )
# join masks
mask = mask0 + mask2 

#filters
ret, thresh = cv2.threshold(mask, 127, 255,0)
	#Erosions and dilations
	#erosions are apploed to reduce the size of foreground objects
kernel = np.ones((3,3),np.uint8)
eroded = cv2.erode(thresh, kernel, iterations=0)	
dilated = cv2.dilate(eroded, kernel, iterations=3) 
#cv2.imshow("dilated", dilated)
#cv2.waitKey(0)
#cv2.imshow("Edged", edged)
dst = cv2.equalizeHist(dilated)
    
cv2.imshow("equilized", dst)

cnts,hierarchy = cv2.findContours(dilated,cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
#cv2.drawContours(orig_frame, cnts, -1, (0, 255, 0), 3)
cnts = sorted(cnts, key = cv2.contourArea, reverse = True)[:60]

boundingBoxes = np.empty((0, 4), float)
if len(cnts) > 0:

	M = cv2.moments(cnts[0])
	for c in cnts:
		rect = cv2.minAreaRect(c)
		#print("rect: {}".format(rect))

		# the order of the box points: bottom left, top left, top right,
		# bottom right
		box = cv2.boxPoints(rect)
		box = np.int0(box)

		#print("bounding box: {}".format(box))
		cv2.drawContours(image, [box], 0, (0, 0, 255), 2)
		#x,y,w,h = cv2.boundingRect(c)

		#boundingBoxes = np.append(boundingBoxes, np.array([[x,y,x+w,y+h]]), axis = 0)
		#cv2.rectangle(orig_frame,(x,y), (x+w, y+h), (255,0,0), 2)

		cv2.imshow("bounding rectangle",image)

		box0 = (box[0])
		#print(box0[0]/width)
		#print(box0[1]/height)

		box1 = (box[1])
		#print(box1[0]/width)
		#print(box0[1]/height)

		box2 = (box[2])
		#print(box2[0]/width)
		#print(box2[1]/height)

		box3 = (box[3])
		#print(box3[0]/width)
		#print(box3[1]/height)

		boxSizeThreshold = 3

		if (box1[1]-box0[1])*(box3[0]-box0[0] > boxSizeThreshold ):
		#calculating middle point of box
			boxX = ((box1[0]+box2[0])/2)
			boxY = ((box2[1]+box3[1])/2)
			print("not high")
   
		else:
			boxX = -1
			boxY = -1
			print("high")
		#cv2.waitKey(0)
	time.sleep(.01)
