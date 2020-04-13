### CMPT365_Project
George Giovanis - ggiovani@sfu.ca  
Vincent Law - vclaw@sfu.ca  

### Application Link:
https://infinite-harbor-16318.herokuapp.com/  
  
Note: the app is running on a free hosting platform, and as a result, responses can be delayed. Please allow 5-10 seconds between uploading a video and attempting to generate an STI. 

### Project Demo:
https://drive.google.com/open?id=1SwFahp3h07T4XYxERAQt6xF3bRz3vE6x

### To install and run the application on your own computer:
* Install Node.js and Python3
* Install virtualenv
* Activate environment 
* Install dependencies 
```
pip install -r requirements.txt
```  
  
**Feel free to email us if you run into installation issues. 

### To run back-end:
* Activate your virtual environment in a python terminal
```
$ . venv/bin/activate
```
On Windows
```
> venv\Scripts\activate
```
Start flask server:
* `$ export FLASK_APP=setup.py` 
* `$ flask run`

```
 env FLASK_APP=setup.py python -m flask run
```

### To run front-end:
open another terminal
```
cd client  
npm start
```
