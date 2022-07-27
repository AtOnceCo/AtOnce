# AtOnce
AtOnce - Shopify Customer Service Made Easy. Returns, Exchanges &amp; Refunds.

This generates a content box that allows customers to easily return items from their order status page.

It also saves customers from needing to find/locate their order number by storing it locally.
<br/>
<br/>
<br/>
<br/>
**Note: You should also add your self-service code to your order status notifications in Shopify Admin > Settings > Notifications**
<br/>
<br/>
We suggest adding it to:
<br/>
- Order Confirmation Email
- Shipping Confirmation Email
- Delivered Email
- Local Order Delivered Email
<br/>

```
<div style="text-align:center;margin-top:0.5rem;"><a href="https://RETURNS.YOURSTORE.COM?order={{ order_number }}_atonce_{% if shipping_address %}{{ shipping_address.zip | remove: " " | upcase }}{% else %}{{ billing_address.zip | remove: " " | upcase }}{% endif %}" target="_blank">Need help? Return/Exchange your order in 30 seconds</a></div>
```

<br/>
<br/>

**Variables:**
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

<br/>
<br/>

**Main function:**
```
AtOnceReturns(portal_name, accept_returns, new_return_id, first_time_accessed, order_num, order_zip, a_style)
```

<br/>
<br/>

**Example usage:**
```
<script src="https://cdn.jsdelivr.net/gh/AtOnceCo/AtOnce@main/status.js"></script>
<script>
    function AtOnceStatusBox() {
        let accept_returns = true
        let portal_name = "RETURNS.YOURSTORE.COM"
        
        let f = false
        {% if first_time_accessed %} f = true {% endif %}
        
        let a = AtOnceReturns(portal_name, accept_returns, {{ checkout.attributes.atonce_return | json }}, f, {{ checkout.order_number | json }}, {{ checkout.shipping_address.zip | json }})
        if (a.length) { Shopify.Checkout.OrderStatus.addContentBox(ar_i[0],ar_i[1]) }
    }
    AtOnceStatusBox()
</script>
```

<br/>
<br/>

**Example on order status page:**
![Example](https://github.com/AtOnceCo/AtOnce/blob/main/Example%201.png)
