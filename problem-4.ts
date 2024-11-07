{
    
    interface circleAreaType {
        shape: "circle";
        radius: number;
    }
    interface rectangleAreaType {
        shape: "rectangle";
        width: number;
        height: number;
    }
    const calculateShapeArea = (area : circleAreaType | rectangleAreaType) : number   =>{
        if(area.shape === "circle"){
            const circleArea = Math.PI * area.radius * area.radius;
            const result = parseFloat(circleArea.toFixed(2))
            // console.log(result)
          return  result;
        }
        else if(area.shape === "rectangle"){
            const rectangleArea = area.width * area.height;
            // console.log(rectangleArea)
            return rectangleArea;
        }
        return 0;
    }
    const circleArea : number = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea)
    const rectangleArea : number   = calculateShapeArea({
        shape: "rectangle",
        width: 6,
        height: 8,
      });
      console.log(rectangleArea)
}