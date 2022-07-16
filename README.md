# AtOnce
AtOnce - Shopify Customer Service Made Easy. Returns, Exchanges &amp; Refunds.

This generates a content box that allows customers to easily return items from their order status page.

It also saves customers from needing to find/locate their order number by storing it locally.


Variables:
```
portal_name = "RETURNS.YOURSTORE.COM"
OR portal_name = "YOURSTORE.USEATONCE.COM"

accept_returns = true
OR accept_returns = false

new_return_id = {{ checkout.attributes.atonce_return | json }}
first_time_accessed = {% if first_time_accessed %}
order_num = {{ checkout.order_number | json }}
order_zip = {{ checkout.shipping_address.zip | json }}

(optional custom link styles)
a_style = "font-weight:600;padding: 0.75rem 1rem;border: 1px solid #ddd;border-radius: 5px;"
```

Main function:
```
AtOnceReturns(portal_name, accept_returns, new_return_id, first_time_accessed, order_num, order_zip, a_style)
```


Example usage:
```
<script src="https://cdn.jsdelivr.net/gh/AtOnceCo/AtOnce@main/status.js"></script>
<script>
    function createAtOnceOrderStatusInfo() {
        let fta = false
        {% if first_time_accessed %} fta = true {% endif %}
        
        let accept_returns = true
        let portal_name = "RETURNS.YOURSTORE.COM"
        
        let ar_i = AtOnceReturns(portal_name, accept_returns, {{ checkout.attributes.atonce_return | json }}, fta, {{ checkout.order_number | json }}, {{ checkout.shipping_address.zip | json }})
        if (ar_i.length) { Shopify.Checkout.OrderStatus.addContentBox(ar_i[0],ar_i[1]) }
    }
    createAtOnceOrderStatusInfo()
</script>
```


Example on order status page:

![Example](https://github.com/AtOnceCo/AtOnce/blob/main/Example%201.png)
