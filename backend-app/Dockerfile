FROM ruby:3.1

# Install essential Linux packages and nokogiri dependencies
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    libxml2-dev \
    libxslt1-dev \
    pkg-config \
    nodejs

# Set the working directory
WORKDIR /rails

# Copy Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install bundler version that matches the Gemfile.lock
RUN gem install bundler -v 2.6.2

# Install gems
RUN bundle install

# Copy the rest of the application
COPY . .

# Start the main process
CMD ["rails", "server", "-b", "0.0.0.0"]