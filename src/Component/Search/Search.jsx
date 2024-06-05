import "./Search.scss"

const Search = ({search , setSearch}) => {
  return (
    <div className={search ? "search01 active" : "search01"}>
        <div className="search1">
        <i class="fa-solid fa-door-open" onClick={() => setSearch(!search)}></i>
           <div className="input">
           <input type="text" placeholder='Find your plants' />
           <button>Search</button>
           </div>
           <div className="right">
          <div className="product">
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main12.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Barberton Daisy</p>
                    <h3>$119.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main12.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Barberton Daisy</p>
                    <h3>$119.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main13.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Angel Wing Begonia</p>
                    <h3>$169.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main14.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>African Violet</p>
                    <h3>$130.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main15.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Beach Spider Lily</p>
                    <h3>$149.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main16.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Blushing Bromeliad</p>
                    <h3>$110.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main17.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Aluminum Plant</p>
                    <h3>$128.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main18.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Bird's Nest Fern</p>
                    <h3>$156.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main19.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Broadleaf Lady Palm</p>
                    <h3>$230.00</h3>
                </div>
          </div>
          <div className="product1">
                <div className="rasm">
                    <img src="/images/main20.png" alt="" />
                    <div className="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div className="narx">
                    <p>Chinese Evergreen</p>
                    <h3>$209.00</h3>
                </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Search