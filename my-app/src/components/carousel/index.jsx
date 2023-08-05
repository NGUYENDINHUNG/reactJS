import React , {useState} from 'react';

const CarouseList = [
   " https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-4k-laptop-va-pc-800x500.jpg ",
   "https://thuthuatnhanh.com/wp-content/uploads/2023/06/hinh-nen-4k-cho-may-tinh.jpg",
   "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-nen-4k-tuyet-dep-cho-may-tinh.jpg",
   "https://thptphanvantri.edu.vn/hinh-nen-laptop-cuc-dep/imager_54_4192_700.jpg",
   "https://mega.com.vn/media/news/0106_hinh-nen-4k-may-tinh24.jpg",
   "https://img5.thuthuatphanmem.vn/uploads/2021/11/08/anh-nen-game-sinh-ton-4k_081450346.jpg",
   "https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-nen-4k-dep-cho-may-tinh-tivi-smartphone-840x443.jpg"
   
]

function Carousel (props) {
    const [index, setIndex] = useState(0);

    const onNextCarousel = () => {
        if (index + 1 < CarouseList.length){
            setIndex((prev) => prev + 1)
        } else {
            setIndex(0)
        }
    }



    const onPreviousImge = () => {
        if (index - 1  >= 0) {
            setIndex((prev) => prev - 1);
          } else {
            setIndex(CarouseList.length - 1);
          }
    };

   
  return (
    <div className='d-flex flex-column align-items-center'>
        <img
        style={{
            width: '600px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '5px',
            marginBottom: '20px',
        }}
        src={CarouseList[index]}
        atl="ảnh nền"
        />
    <h5>{index + 1}/{CarouseList.length}</h5>
    
   <button className='btn btn-outline-success' onClick={onNextCarousel}><i class="fa-solid fa-forward"></i></button>
   
   <button className='btn btn-outline-success' onClick={onPreviousImge}><i class="fa-solid fa-circle-left"></i></button>

    </div>
  )








}  



export default Carousel;