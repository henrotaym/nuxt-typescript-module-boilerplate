# DEPENDENCIES
FROM node:16-alpine as deps

WORKDIR /app

COPY package.json yarn.lock ./
# COPY . .

# COPY ./prisma ./prisma

RUN yarn install

# RUN yarn prisma generate

# BUILDER
FROM deps as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# COPY ./.env.development.example ./.env.development

# RUNNER
FROM builder as runner

WORKDIR /app

# ENV NODE_ENV=development

COPY --from=builder /app ./

CMD yarn dev