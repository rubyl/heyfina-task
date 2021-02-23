# React-native challenge

Our React-native coding challenge is a simple "Crypto Tracker". Users should be able to add new cryptocurrencies, visualize the current price and the change in price in % for the last 24 hours, and also be able to remove a cryptocurrency from the "Crypto Tracker".

# App setup

The project was initialised using [Expo](http://www.expo.io) and is ready to run after installing the dependencies (`yarn` was used to create this project but you can also use `npm`). Feel free to add/remove packages as you see fit and try to showcase your knowledge!
In case you are not familiar with Expo toolkit, have a look at their [documentation](https://docs.expo.io/).

# Instructions

 - Clone this project and save it as a private repository in your github account.
 - When you finish, invite the user dmdmd on your project (and let your hiring manager know).
 - Include instructions/comments/remarks at the end of this README.md file when applicable

# Main Features of the app

### 1) List of cryptocurrencies
Users should be able to visualize the list of cryptocurrencies they add on the app

### 2) Current price and percentage change in the last 24h
Users should also be able to visualize:
* Current price for the cryptocurrencies added
* Change in percentage in USD in the last 24h

### 3) API to get pricing and percentage change
Feel free to use the pricing and percentage change provider of your preference. One of the simplest ones that doesn't require registration is [Messari](https://messari.io/api/docs). You can find a sample bellow:
https://data.messari.io/api/v1/assets/btc/metrics

### 4) Remove a cryptocurrency
From the list, users should be able to remove a cryptocurrency from the "Crypto Tracker".

### 5) (Nice-to-have) Pricing and percentage change update
The Crypto Tracker should update the current price and percentage change in USD (or EUR) to the user. Chose your preferred way to update the data.

### Bonus
- Tests
- Typescript
- Graphql
