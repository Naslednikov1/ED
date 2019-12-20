function testAccept(Obj){
    if (confirm('Вы уверены, что заказ готов?')) {
        alert('Готовность заказа подтверждена');
    };
    return false;
};
function testDecline(Obj){
    if (confirm('Вы уверены, что заказ не готов?')) {
        alert('Готовность заказа опровергнута');
    };
    return false;
};