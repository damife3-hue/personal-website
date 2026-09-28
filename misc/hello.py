def fizzBuzz():
    for i in range(1,51):
        if i % 15 == 0: #we use 15 because it is the lowest multiple of 3 and 5. this also works: i % 3 == 0 and i % 5 == 0: 
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

rows = 6

for row in range(1,rows+1):
    printVal = ""
    for column in range(row):
        printVal += "*"
    print(printVal)
   
    
        
    
