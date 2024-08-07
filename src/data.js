// export const API_KEY = 'AIzaSyD2lBZjlDUXl09j8OgFZ_e7zQmLpVx380w';
export const API_KEY = 'AIzaSyCuR5t2NKjwDc5IHu4hQjyjytB0fiS4yG4';

export const value_converter = (value)=>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value >= 1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}