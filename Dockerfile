# DEPENDENCIES
FROM node:16-alpine as deps

USER app

WORKDIR /app

COPY --chown=app:app package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts

# BUILDER
FROM deps as builder

USER app

WORKDIR /app

COPY --chown=app:app --from=deps /app/node_modules ./node_modules

COPY --chown=app:app . .

# RUNNER
FROM builder as runner

USER app

WORKDIR /app

COPY --chown=app:app --from=builder /app ./

CMD yarn dev