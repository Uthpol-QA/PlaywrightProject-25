const { test, expect } = require('@playwright/test')

//For api testing, simply use --> 'request'


let UserId;  //storing in a variable

test('Get User', async ({ request }) => {

    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())   // ".json()" will convert json format 

    expect(response.status()).toBe(200)
})

test('Create User', async ({ request }) => {
    const response = await request.post(
        "https://reqres.in/api/users",
        {
            data: {
                "name": "John",
                "job": "Player",
            },
            headers: {
                "x-api-key": "reqres-free-v1",
                "Accept": "application/json"
            }
        }
    )
    console.log(await response.json())

    expect(response.status()).toBe(201)

    let res = await response.json()
    UserId = res.id

})

test('Update User', async ({ request }) => {
    const response = await request.put(
        "https://reqres.in/api/users/" + UserId,
        {
            data: {
                "name": "Mike",
                "job": "Teacher",
            },
            headers: {
                "x-api-key": "reqres-free-v1",
            }
        }
    )
    console.log(await response.json())
    expect(response.status()).toBe(200)

})

test('Delete User', async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/" + UserId,
        {
            headers: {
                "x-api-key": "reqres-free-v1",
            }

        }
    )
    expect(response.status()).toBe(204)
})