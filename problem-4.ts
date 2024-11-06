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
    const calculateShapeArea = (area : circleAreaType | rectangleAreaType) : number | undefined   =>{
        if(area.shape === "circle"){
            const circleArea = Math.PI * area.radius * area.radius;
          return parseFloat(circleArea.toFixed(2));
        }
        if(area.shape === "rectangle"){
            const rectangleArea = area.width * area.height;
            return rectangleArea;
        }
    }
    const circleArea : number | undefined = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    const rectangleArea : number | undefined  = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });
      console.log(rectangleArea);
}