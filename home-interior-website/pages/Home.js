import Layout from '@/Components/Layout'
import React from 'react'

const Home = () => {
    return (
        <Layout>
            <div /* style={{marginLeft:"2rem" , marginRight:"2rem" }} */ className='leftRightMargin'>
                <form>
                    <fieldset>
                        <legend>Disabled fieldset example</legend>
                        <div class="mb-3">
                            <label  class="form-label">input</label>
                            <input type="text"  class="form-control" placeholder="Disabled input" />
                        </div>
                        <div class="mb-3">
                            <label for="disabledSelect" class="form-label">select menu</label>
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled select</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"  />
                                <label class="form-check-label">
                                    Can't check this
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        </Layout>
    )
}

export default Home