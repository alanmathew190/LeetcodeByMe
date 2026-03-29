

def insertionSort(arr):
    for i in range(len(arr)):
        j=i
        
        while j>0 and arr[j-1]>arr[j]:  #arr[j-1]>arr[j]: for increasing order and arr[j-1]<arr[j]: for decreasing order
            arr[j-1],arr[j]=arr[j],arr[j-1]
            j-=1        
    return arr
print(insertionSort(list(map(int,input().split()))))