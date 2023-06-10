import visa from "../assets/image/footers/d4bbea4570b93bfd5fc652ca82a262a8.png"
import suser from "../assets/image/footers/a0a9062ebe19b45c1ae0506f16af5c16.png"
import jcb from "../assets/image/footers/38fd98e55806c3b2e4535c4e4a6c4c08.png"
import american from "../assets/image/footers/bc2a874caeee705449c164be385b796c.png"
import code from "../assets/image/footers/2c46b83d84111ddc32cfd3b5995d9281.png"
import pay from "../assets/image/footers/9263fa8c83628f5deff55e2a90758b06.png"
import sPayLater from "../assets/image/footers/0217f1d345587aa0a300e69e2195c492.png"
import shopeeExpress from "../assets/image/footers/5e3f0bee86058637ff23cfdf2e14ca09.png"
import ghin from "../assets/image/footers/77bf96a871418fbc21cc63dd39fb5f15.jfif"
import vietTel from "../assets/image/footers/59270fb2f3fbb7cbc92fca3877edde3f.png"
import vietNamPost from "../assets/image/footers/957f4eec32b963115f952835c779cd2c.png"
import ninjavan from "../assets/image/footers/6e3be504f08f88a15a28a9a447d94d3d.png"
import best from "../assets/image/footers/b8348201b4611fc3315b82765d35fc63.png"
import be from "../assets/image/footers/0b3014da32de48c03340a4e4154328f6.png"
import jAndT from "../assets/image/footers/0d349e22ca8d4337d11c9b134cf9fe63.png"
import grap from "../assets/image/footers/3900aefbf52b1c180ba66e5ec91190e5.png"
import iconFacebook from "../assets/image/footers/icon_facebook.png"
import iconInstagram from "../assets/image/footers/icon_instagram.png"
import iconLinkedIn from "../assets/image/footers/icon_linkedIn.png"
import qrCode from "../assets/image/footers/qr_code.png"
import appStore from "../assets/image/footers/app_store.png"
import googlePlay from "../assets/image/footers/google_play.png"
import appGallery from "../assets/image/footers/app_gallery.png"

const payments = [
        { img: visa },
        { img: suser },
        { img: jcb },
        { img: american },
        { img: code },
        { img: pay },
        { img: sPayLater },
]

const logistics = [
        { img: shopeeExpress },
        { img: ghin },
        { img: vietTel },
        { img: vietNamPost },
        { img: ninjavan },
        { img: best },
        { img: be },
        { img: jAndT },
        { img: grap },
]

export default function Footer() {
        return (
                <div className="footer">
                        <div className="footer_container">
                                <div className="footer_wrapper">
                                        <p className="footer_header">
                                                Chăm sóc khách hàng
                                        </p>
                                        <p>Trung tâm trợ giúp</p>
                                        <p>Shopee block</p>
                                        <p>Shopee mall</p>
                                        <p>Hưỡng dẫn mua hàng</p>
                                        <p>Hướng dẫn bán hàng</p>
                                        <p>Thanh toán</p>
                                        <p>Shopee xu</p>
                                        <p>Vận chuyển</p>
                                        <p>Trả hàng và hoàn tiền</p>
                                        <p>Chăm sóc khách hàng</p>
                                        <p>Chính sách bảo hành</p>
                                </div>
                                <div className="footer_wrapper">
                                        <p className="footer_header">
                                                Về shoppe
                                        </p>
                                        <p>Giới thiệu về shopee Việt Nam</p>
                                        <p>Tuyển dụng</p>
                                        <p>Điều khoản shopee</p>
                                        <p>Chính sách bảo mật</p>
                                        <p>Chính hãng</p>
                                        <p>Kênh người bán</p>
                                        <p>Flash sale</p>
                                        <p>
                                                Chương trình tiếp thị liên kết
                                                với shopee
                                        </p>
                                        <p>Liên hệ với chuyền thông</p>
                                </div>
                                <div className="footer_wrapper">
                                        <p className="footer_header">
                                                Thanh toán
                                        </p>
                                        <div className="footer_payments">
                                                {payments.map(
                                                        (payment, index) => (
                                                                <div
                                                                        key={`checkout_${index}`}
                                                                        className="image_wrapper"
                                                                >
                                                                        <div
                                                                                className="image_content"
                                                                                style={{
                                                                                        backgroundImage: `url('${payment.img}')`,
                                                                                }}
                                                                        ></div>
                                                                </div>
                                                        )
                                                )}
                                        </div>
                                        <p className="footer_header">
                                                Đơn vị vận chuyển
                                        </p>
                                        <div
                                                className="footer_logistics"
                                                style={{
                                                        marginTop: "2.5rem",
                                                }}
                                        >
                                                {logistics.map(
                                                        (logistics, index) => (
                                                                <div
                                                                        key={`checkout_${index}`}
                                                                        className="image_wrapper"
                                                                >
                                                                        <div
                                                                                className="image_content"
                                                                                style={{
                                                                                        backgroundImage: `url('${logistics.img}')`,
                                                                                }}
                                                                        ></div>
                                                                </div>
                                                        )
                                                )}
                                        </div>
                                </div>
                                <div className="footer_wrapper">
                                        <p className="footer_header">
                                                Theo dõi chúng tôi trên
                                        </p>
                                        <div className="footer_follow_us">
                                                <div className="follow_us_item">
                                                        <div
                                                                className="image_content"
                                                                style={{
                                                                        backgroundImage: `url('${iconFacebook}')`,
                                                                }}
                                                        ></div>
                                                        <p>Facebook</p>
                                                </div>
                                                <div className="follow_us_item">
                                                        <div
                                                                className="image_content"
                                                                style={{
                                                                        backgroundImage: `url('${iconInstagram}')`,
                                                                }}
                                                        ></div>
                                                        <p>Instagram</p>
                                                </div>
                                                <div className="follow_us_item">
                                                        <div
                                                                className="image_content"
                                                                style={{
                                                                        backgroundImage: `url('${iconLinkedIn}')`,
                                                                }}
                                                        ></div>
                                                        <p>LinkedIn</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="footer_wrapper">
                                        <p className="footer_header">
                                                Tải ứng dụng shopee ngay thôi
                                        </p>
                                        <div className="footer_images_download">
                                                <div className="qr_code">
                                                        <div
                                                                className="image_content_qr_code"
                                                                style={{
                                                                        backgroundImage: `url('${qrCode}')`,
                                                                }}
                                                        ></div>
                                                </div>
                                                <div className="other">
                                                        <div className="image_wrapper">
                                                                <div
                                                                        className="image_content"
                                                                        style={{
                                                                                backgroundImage: `url('${appStore}')`,
                                                                        }}
                                                                ></div>
                                                        </div>
                                                        <div className="image_wrapper">
                                                                <div
                                                                        className="image_content"
                                                                        style={{
                                                                                backgroundImage: `url('${googlePlay}')`,
                                                                        }}
                                                                ></div>
                                                        </div>
                                                        <div className="image_wrapper">
                                                                <div
                                                                        className="image_content"
                                                                        style={{
                                                                                backgroundImage: `url('${appGallery}')`,
                                                                        }}
                                                                ></div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
